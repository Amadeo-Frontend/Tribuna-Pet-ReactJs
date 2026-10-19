import { NextResponse } from "next/server";
import { getAuthenticatedUser } from "../../../../../lib/auth";
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

function sanitizeFilename(originalName) {
  const parsed = path.parse(originalName);
  const cleanName = parsed.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return cleanName || "imagem";
}

export async function POST(request) {
  const user = getAuthenticatedUser(request);
  if (!user) {
    return NextResponse.json({ success: false, message: "Não autorizado." }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const files = formData.getAll("files");

    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, message: "Nenhum arquivo enviado." },
        { status: 400 }
      );
    }

    const imagesDir = path.join(process.cwd(), "public", "images");
    await fs.mkdir(imagesDir, { recursive: true });

    const results = [];

    for (const file of files) {
      if (!(file instanceof Blob)) continue;

      const buffer = Buffer.from(await file.arrayBuffer());
      const originalSize = buffer.length;
      const baseCleanName = sanitizeFilename(file.name || "imagem");

      // Check if file is SVG
      const isSvg = file.type === "image/svg+xml" || file.name.endsWith(".svg");

      if (isSvg) {
        let finalFilename = `${baseCleanName}.svg`;
        let targetPath = path.join(imagesDir, finalFilename);

        let counter = 1;
        while (true) {
          try {
            await fs.access(targetPath);
            finalFilename = `${baseCleanName}-${counter}.svg`;
            targetPath = path.join(imagesDir, finalFilename);
            counter++;
          } catch {
            break;
          }
        }

        await fs.writeFile(targetPath, buffer);
        results.push({
          name: finalFilename,
          url: `/images/${finalFilename}`,
          originalSize,
          newSize: originalSize,
          savings: "0%",
          format: "svg",
        });
        continue;
      }

      // Convert and compress using Sharp to WebP
      let finalFilename = `${baseCleanName}.webp`;
      let targetPath = path.join(imagesDir, finalFilename);

      let counter = 1;
      while (true) {
        try {
          await fs.access(targetPath);
          finalFilename = `${baseCleanName}-${counter}.webp`;
          targetPath = path.join(imagesDir, finalFilename);
          counter++;
        } catch {
          break;
        }
      }

      const imageProcessor = sharp(buffer);
      const metadata = await imageProcessor.metadata();

      const processedBuffer = await imageProcessor
        .rotate() // auto-orient based on EXIF
        .webp({
          quality: 80,
          effort: 4,
        })
        .toBuffer();

      await fs.writeFile(targetPath, processedBuffer);

      const newSize = processedBuffer.length;
      const savedBytes = originalSize - newSize;
      const savingsPercent =
        originalSize > 0
          ? Math.max(0, Math.round((savedBytes / originalSize) * 100))
          : 0;

      results.push({
        name: finalFilename,
        url: `/images/${finalFilename}`,
        originalSize,
        newSize,
        savings: `${savingsPercent}%`,
        width: metadata.width,
        height: metadata.height,
        format: "webp",
      });
    }

    return NextResponse.json({
      success: true,
      message: `${results.length} imagem(ns) convertida(s) para WebP e comprimida(s) com sucesso!`,
      images: results,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, message: `Erro ao processar imagem: ${error.message}` },
      { status: 500 }
    );
  }
}
