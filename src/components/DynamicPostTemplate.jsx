"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";
import Seo from "./Seo";
import LiveClock from "./LiveClock";
import ShareButton from "./ui/ShareButton";
import AdBanner from "./AdBanner";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaTag,
  FaShareAlt,
} from "react-icons/fa";

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

const ScaleIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ scale: 0.98, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.4, delay }}
  >
    {children}
  </motion.div>
);

/**
 * Lightweight helper to format markdown-like text safely
 */
function MarkdownRenderer({ content }) {
  if (!content) return null;

  // Split content by paragraphs/blocks
  const blocks = content.split(/\n\s*\n/);

  return (
    <div className="space-y-6 text-gray-800 leading-relaxed text-base md:text-lg">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();

        // Headers
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={idx} className="pt-4 text-xl md:text-2xl font-bold text-gray-900">
              {trimmed.replace(/^###\s+/, "")}
            </h3>
          );
        }
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={idx} className="pt-6 pb-2 text-2xl md:text-3xl font-extrabold text-gray-900 border-b border-gray-200">
              {trimmed.replace(/^##\s+/, "")}
            </h2>
          );
        }
        if (trimmed.startsWith("# ")) {
          return (
            <h1 key={idx} className="pt-6 pb-2 text-3xl md:text-4xl font-extrabold text-gray-900">
              {trimmed.replace(/^#\s+/, "")}
            </h1>
          );
        }

        // Blockquote / Destaque
        if (trimmed.startsWith("> ")) {
          return (
            <blockquote
              key={idx}
              className="p-4 my-4 border-l-4 rounded-r-lg bg-blue-50 border-primary text-gray-800 font-medium italic"
            >
              {trimmed.replace(/^>\s+/, "")}
            </blockquote>
          );
        }

        // Bullet lists
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const items = trimmed.split("\n").filter((l) => l.trim().startsWith("- ") || l.trim().startsWith("* "));
          return (
            <ul key={idx} className="pl-6 space-y-2 list-disc text-gray-700">
              {items.map((item, itemIdx) => {
                const text = item.replace(/^[-*]\s+/, "");
                return (
                  <li key={itemIdx} dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
                );
              })}
            </ul>
          );
        }

        // Image markdown ![alt](url)
        const imgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
        if (imgMatch) {
          const [, alt, src] = imgMatch;
          return (
            <figure key={idx} className="my-6">
              <img
                src={src}
                alt={alt || "Imagem do artigo"}
                className="w-full h-auto rounded-xl shadow-md object-cover max-h-[500px]"
              />
              {alt && <figcaption className="mt-2 text-xs text-center text-gray-500 italic">{alt}</figcaption>}
            </figure>
          );
        }

        // Standard paragraph with inline formatting
        return (
          <p
            key={idx}
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
          />
        );
      })}
    </div>
  );
}

function formatInline(str) {
  return str
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary font-semibold underline hover:text-blue-800">$1</a>');
}

export default function DynamicPostTemplate({ post }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        const el = document.getElementById("global-loader");
        if (el) el.style.display = "none";
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!post) return null;

  const canonicalUrl = `https://www.tribunadopet.com.br/${post.slug}`;
  const imageUrl = post.image?.startsWith("http")
    ? post.image
    : `https://www.tribunadopet.com.br${post.image?.startsWith("/") ? "" : "/"}${post.image}`;

  const imageFileName = post.image ? post.image.split("/").pop().split("?")[0] : null;
  const contentHasCoverImage = Boolean(
    imageFileName && post.content && post.content.includes(imageFileName)
  );

  return (
    <>
      <Seo
        title={`${post.title} | Tribuna do Pet`}
        description={post.subtitle || post.description || post.title}
        canonical={canonicalUrl}
        image={imageUrl}
        published={post.published}
      />

      {/* Top bar */}
      <div className="hidden py-2 text-white bg-gradient-to-r bg-primary sm:block">
        <div className="container flex items-center justify-between px-4 mx-auto text-sm">
          <span>Seu portal de informações para seu melhor amigo</span>
          <LiveClock />
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-black/50" onClick={() => setMenuOpen(false)} />
      )}

      <Header onToggleMenu={() => setMenuOpen(true)} />

      {/* Breadcrumb + título */}
      <div className="py-6 border-b bg-gradient-to-b from-primary to-primary">
        <div className="container px-4 mx-auto">
          <nav className="flex flex-wrap gap-2 mb-3 text-sm text-gray-200">
            <Link href="/" className="flex items-center hover:underline">
              <i className="mr-1 text-sm fas fa-home"></i> Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-200">{post.category || "Matérias"}</span>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-300 line-clamp-1 max-w-xs">{post.title}</span>
          </nav>

          <FadeIn delay={0.1}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 leading-tight">
              {post.title}
            </h1>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs sm:text-sm text-gray-300">
            <span className="flex items-center">
              <FaCalendarAlt className="mr-2 text-primary" />
              {post.published}
            </span>
            <span className="flex items-center">
              <FaClock className="mr-2 text-primary" />
              {post.readingTime || "4 min de leitura"}
            </span>
            {post.author && (
              <span className="flex items-center">
                <FaUser className="mr-2 text-primary" />
                {post.author}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <main className="container max-w-5xl px-4 py-10 mx-auto">
        <article className="overflow-hidden bg-white shadow-xl rounded-2xl">
          <div className="p-6 md:p-10">
            {/* Tag e Subtítulo */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3.5 py-1 text-xs font-bold text-blue-800 bg-blue-100 rounded-full flex items-center">
                <FaTag className="mr-1.5 text-[10px]" />
                {post.category || "Geral"}
              </span>
              {post.tag && (
                <span className="px-3 py-1 text-xs font-semibold text-emerald-800 bg-emerald-100 rounded-full">
                  {post.tag}
                </span>
              )}
            </div>

            {post.subtitle && (
              <FadeIn delay={0.15}>
                <p className="p-4 mb-8 text-lg md:text-xl font-medium text-gray-700 border-l-4 rounded-lg bg-gray-50 border-primary">
                  {post.subtitle}
                </p>
              </FadeIn>
            )}

            {/* Imagem de Capa (apenas se não estiver presente no corpo do conteúdo) */}
            {post.image && !contentHasCoverImage && (
              <ScaleIn delay={0.2}>
                <div className="w-full mb-8">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full rounded-xl shadow-md max-h-[500px]"
                  />
                  {post.imageCaption && (
                    <div className="mt-2 text-xs text-center text-gray-500 italic">
                      {post.imageCaption}
                    </div>
                  )}
                </div>
              </ScaleIn>
            )}

            {/* CSS Customizado da Matéria */}
            {post.customCss && (
              <style
                id={`post-custom-style-${post.slug || "view"}`}
                dangerouslySetInnerHTML={{ __html: post.customCss }}
              />
            )}

            {/* Corpo do Artigo */}
            <FadeIn delay={0.3}>
              <div className="mt-6 mb-10 tribuna-article-content">
                {post.content && (post.content.includes("<") || post.content.includes("</")) ? (
                  <div
                    className="prose prose-slate max-w-none text-gray-800 leading-relaxed text-base md:text-lg article-body"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                ) : (
                  <MarkdownRenderer content={post.content} />
                )}
              </div>
            </FadeIn>

            {/* Compartilhamento */}
            <div className="pt-8 border-t border-gray-100">
              <ShareButton />
            </div>
          </div>
        </article>

        {/* Anúncio estilo Google Ads */}
        <FadeIn delay={0.5}>
          <AdBanner />
        </FadeIn>
      </main>

      <Footer />
    </>
  );
}
