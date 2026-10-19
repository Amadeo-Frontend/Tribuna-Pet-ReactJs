import fs from "fs/promises";
import path from "path";
import { articlesMetadata } from "./articlesMetadata";

const POSTS_FILE = path.join(process.cwd(), "src", "data", "posts.json");

export function slugify(text) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function getDynamicPosts() {
  try {
    const data = await fs.readFile(POSTS_FILE, "utf8");
    return JSON.parse(data || "[]");
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.mkdir(path.dirname(POSTS_FILE), { recursive: true });
      await fs.writeFile(POSTS_FILE, "[]", "utf8");
      return [];
    }
    console.error("Error reading posts.json:", error);
    return [];
  }
}

export async function saveDynamicPosts(posts) {
  await fs.mkdir(path.dirname(POSTS_FILE), { recursive: true });
  await fs.writeFile(POSTS_FILE, JSON.stringify(posts, null, 2), "utf8");
}

export async function findDynamicPostBySlug(slug) {
  const posts = await getDynamicPosts();
  return posts.find((p) => p.slug === slug) || null;
}

/**
 * Returns all active articles from posts.json (all fully editable and deletable)
 */
export async function getAllArticlesCombined() {
  const dynamicPosts = await getDynamicPosts();

  if (dynamicPosts && dynamicPosts.length > 0) {
    return dynamicPosts.map((p) => ({
      ...p,
      type: "dynamic",
      editable: true,
    }));
  }

  // Fallback if posts.json is empty
  return Object.entries(articlesMetadata).map(([slug, meta]) => ({
    id: `legacy-${slug}`,
    slug,
    title: meta.title.replace(" | Tribuna do Pet", ""),
    subtitle: meta.description,
    description: meta.description,
    image: meta.image,
    published: meta.published,
    category: "Geral",
    tag: "Destaque",
    author: "Redação Tribuna do Pet",
    content: "",
    customCss: "",
    type: "dynamic",
    editable: true,
  }));
}
