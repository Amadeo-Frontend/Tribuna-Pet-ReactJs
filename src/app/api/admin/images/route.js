import { NextResponse } from "next/server";
import { getAuthenticatedUser } from "../../../../lib/auth";
import fs from "fs/promises";
import path from "path";

export async function GET(request) {
  const user = getAuthenticatedUser(request);
  if (!user) {
    return NextResponse.json({ success: false, message: "Não autorizado." }, { status: 401 });
  }

  try {
    const imagesDir = path.join(process.cwd(), "public", "images");
    await fs.mkdir(imagesDir, { recursive: true });

    const filenames = await fs.readdir(imagesDir);
    const imageExtensions = new Set([".webp", ".png", ".jpg", ".jpeg", ".gif", ".svg"]);

    const imageList = [];

    for (const name of filenames) {
      const ext = path.extname(name).toLowerCase();
      if (!imageExtensions.has(ext)) continue;

      const filePath = path.join(imagesDir, name);
      try {
        const stats = await fs.stat(filePath);
        if (stats.isFile()) {
          imageList.push({
            name,
            url: `/images/${name}`,
            size: stats.size,
            format: ext.replace(".", ""),
            updatedAt: stats.mtime.toISOString(),
          });
        }
      } catch {
        // ignore files that couldn't be stated
      }
    }

    // Sort by most recently updated
    imageList.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

    return NextResponse.json({
      success: true,
      images: imageList,
      totalCount: imageList.length,
      totalSize: imageList.reduce((acc, img) => acc + img.size, 0),
    });
  } catch (error) {
    console.error("List images error:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao listar imagens." },
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
    const filename = searchParams.get("filename");

    if (!filename) {
      return NextResponse.json(
        { success: false, message: "Nome do arquivo não informado." },
        { status: 400 }
      );
    }

    // Prevent path traversal
    const safeName = path.basename(filename);
    const filePath = path.join(process.cwd(), "public", "images", safeName);

    await fs.unlink(filePath);

    return NextResponse.json({
      success: true,
      message: `Imagem ${safeName} removida com sucesso.`,
    });
  } catch (error) {
    console.error("Delete image error:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao excluir imagem." },
      { status: 500 }
    );
  }
}
