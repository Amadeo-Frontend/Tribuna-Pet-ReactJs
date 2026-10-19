import { NextResponse } from "next/server";
import { verifyCredentials, createSessionToken, COOKIE_NAME } from "../../../../lib/auth";

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body || {};

    if (!verifyCredentials(username, password)) {
      return NextResponse.json(
        { success: false, message: "Usuário ou senha incorretos." },
        { status: 401 }
      );
    }

    const { token, expiresAt } = createSessionToken(username);

    const response = NextResponse.json({
      success: true,
      message: "Login realizado com sucesso!",
      user: { username: username.trim() },
    });

    response.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: new Date(expiresAt),
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}
