import crypto from "crypto";

const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "tribunapet2026";
const ADMIN_SECRET = process.env.ADMIN_SECRET || "tribuna-pet-super-secret-key-auth-2026-xyz";

export const COOKIE_NAME = "admin_session";

/**
 * Creates an HMAC signed session token
 */
export function createSessionToken(username) {
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
  const payload = JSON.stringify({ u: username, exp: expiresAt });
  const b64Payload = Buffer.from(payload).toString("base64url");

  const hmac = crypto.createHmac("sha256", ADMIN_SECRET);
  hmac.update(b64Payload);
  const signature = hmac.digest("base64url");

  return {
    token: `${b64Payload}.${signature}`,
    expiresAt,
  };
}

/**
 * Verifies an HMAC signed session token
 */
export function verifySessionToken(token) {
  if (!token || typeof token !== "string" || !token.includes(".")) {
    return { valid: false };
  }

  const [b64Payload, signature] = token.split(".");
  if (!b64Payload || !signature) {
    return { valid: false };
  }

  const hmac = crypto.createHmac("sha256", ADMIN_SECRET);
  hmac.update(b64Payload);
  const expectedSig = hmac.digest("base64url");

  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSig))) {
    return { valid: false };
  }

  try {
    const payload = JSON.parse(Buffer.from(b64Payload, "base64url").toString("utf8"));
    if (Date.now() > payload.exp) {
      return { valid: false, expired: true };
    }
    return { valid: true, username: payload.u };
  } catch {
    return { valid: false };
  }
}

/**
 * Check username and password credentials
 */
export function verifyCredentials(username, password) {
  if (!username || !password) return false;
  return username.trim() === ADMIN_USER && password === ADMIN_PASSWORD;
}

/**
 * Helper to get currently authenticated user from Next.js request cookies
 */
export function getAuthenticatedUser(request) {
  if (!request) return null;

  let token = null;

  if (request.cookies && typeof request.cookies.get === "function") {
    token = request.cookies.get(COOKIE_NAME)?.value;
  }

  if (!token && request.headers) {
    const cookieHeader =
      typeof request.headers.get === "function"
        ? request.headers.get("cookie") || ""
        : request.headers.cookie || "";

    const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]*)`));
    token = match ? decodeURIComponent(match[1]) : null;
  }

  if (!token) return null;

  const result = verifySessionToken(token);
  if (!result.valid) return null;

  return { username: result.username };
}
