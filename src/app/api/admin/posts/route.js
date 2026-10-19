import { NextResponse } from "next/server";
import { getAuthenticatedUser } from "../../../../lib/auth";
import {
  getDynamicPosts,
  saveDynamicPosts,
  getAllArticlesCombined,
  slugify,
} from "../../../../lib/postsStore";
import { articlesMetadata } from "../../../../lib/articlesMetadata";

export async function GET(request) {
  const user = getAuthenticatedUser(request);
  if (!user) {
    return NextResponse.json({ success: false, message: "Não autorizado." }, { status: 401 });
  }

  try {
    const allArticles = await getAllArticlesCombined();
    const dynamicPosts = await getDynamicPosts();
    const legacyCount = Object.keys(articlesMetadata).length;

    return NextResponse.json({
      success: true,
      articles: allArticles,
      dynamicCount: dynamicPosts.length,
      legacyCount,
      totalCount: allArticles.length,
    });
  } catch (error) {
    console.error("Fetch posts error:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao buscar artigos." },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const user = getAuthenticatedUser(request);
  if (!user) {
    return NextResponse.json({ success: false, message: "Não autorizado." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const {
      title,
      subtitle,
      slug: customSlug,
      category,
      tag,
      author,
      image,
      imageCaption,
      content,
      customCss,
      featured,
      readingTime,
    } = body;

    if (!title?.trim()) {
      return NextResponse.json(
        { success: false, message: "O título da matéria é obrigatório." },
        { status: 400 }
      );
    }

    if (!content?.trim()) {
      return NextResponse.json(
        { success: false, message: "O conteúdo da matéria é obrigatório." },
        { status: 400 }
      );
    }

    const finalSlug = slugify(customSlug || title);
    if (!finalSlug) {
      return NextResponse.json(
        { success: false, message: "Slug inválido." },
        { status: 400 }
      );
    }

    const currentPosts = await getDynamicPosts();
    if (currentPosts.some((p) => p.slug === finalSlug)) {
      return NextResponse.json(
        { success: false, message: `Já existe uma matéria com o slug /${finalSlug}.` },
        { status: 400 }
      );
    }

    const newPost = {
      id: Date.now().toString(),
      slug: finalSlug,
      title: title.trim(),
      subtitle: subtitle?.trim() || "",
      category: category?.trim() || "Geral",
      tag: tag?.trim() || "Novidade",
      author: author?.trim() || "Redação Tribuna do Pet",
      image: image?.trim() || "/images/banner-blog.webp",
      imageCaption: imageCaption?.trim() || "",
      content: content.trim(),
      customCss: customCss?.trim() || "",
      featured: Boolean(featured),
      readingTime: readingTime || "4 min de leitura",
      published: new Date().toISOString().split("T")[0],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    currentPosts.unshift(newPost);
    await saveDynamicPosts(currentPosts);

    return NextResponse.json({
      success: true,
      message: "Matéria publicada com sucesso!",
      post: newPost,
    });
  } catch (error) {
    console.error("Create post error:", error);
    return NextResponse.json(
      { success: false, message: `Erro ao salvar matéria: ${error.message}` },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  const user = getAuthenticatedUser(request);
  if (!user) {
    return NextResponse.json({ success: false, message: "Não autorizado." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID da matéria não informado." },
        { status: 400 }
      );
    }

    const currentPosts = await getDynamicPosts();
    const index = currentPosts.findIndex((p) => p.id === id);

    if (index === -1) {
      return NextResponse.json(
        { success: false, message: "Matéria não encontrada no banco de posts dinâmicos." },
        { status: 404 }
      );
    }

    // If slug is being changed, verify uniqueness
    if (updates.slug && updates.slug !== currentPosts[index].slug) {
      const cleanSlug = slugify(updates.slug);
      if (currentPosts.some((p) => p.slug === cleanSlug && p.id !== id)) {
        return NextResponse.json(
          { success: false, message: `O slug /${cleanSlug} já está sendo utilizado.` },
          { status: 400 }
        );
      }
      updates.slug = cleanSlug;
    }

    const updatedPost = {
      ...currentPosts[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    currentPosts[index] = updatedPost;
    await saveDynamicPosts(currentPosts);

    return NextResponse.json({
      success: true,
      message: "Matéria atualizada com sucesso!",
      post: updatedPost,
    });
  } catch (error) {
    console.error("Update post error:", error);
    return NextResponse.json(
      { success: false, message: `Erro ao atualizar matéria: ${error.message}` },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  const user = getAuthenticatedUser(request);
  if (!user) {
    return NextResponse.json({ success: false, message: "Não autorizado." }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID da matéria não informado." },
        { status: 400 }
      );
    }

    const currentPosts = await getDynamicPosts();
    const filtered = currentPosts.filter((p) => p.id !== id);

    if (filtered.length === currentPosts.length) {
      return NextResponse.json(
        { success: false, message: "Matéria não encontrada para exclusão." },
        { status: 404 }
      );
    }

    await saveDynamicPosts(filtered);

    return NextResponse.json({
      success: true,
      message: "Matéria excluída com sucesso.",
    });
  } catch (error) {
    console.error("Delete post error:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao excluir matéria." },
      { status: 500 }
    );
  }
}
