import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = './public';
const files = fs.readdirSync(publicDir);

async function convertImages() {
  console.log('🚀 Iniciando conversão de imagens para WebP alta qualidade (quality: 85)...');
  
  let convertedCount = 0;
  let totalSavedBytes = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const filePath = path.join(publicDir, file);
      const fileNameNoExt = path.basename(file, ext);
      const webpPath = path.join(publicDir, `${fileNameNoExt}.webp`);

      try {
        const originalStats = fs.statSync(filePath);
        
        // Redimensionar para max 1920px se for imagem gigante (para manter qualidade de alta definição)
        const image = sharp(filePath);
        const metadata = await image.metadata();

        let pipeline = image;
        if (metadata.width && metadata.width > 1920) {
          pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
        }

        await pipeline
          .webp({ quality: 85, effort: 6 })
          .toFile(webpPath);

        const newStats = fs.statSync(webpPath);
        const saved = originalStats.size - newStats.size;
        totalSavedBytes += saved;
        convertedCount++;

        console.log(`✅ ${file} (${(originalStats.size / 1024 / 1024).toFixed(2)} MB) -> ${fileNameNoExt}.webp (${(newStats.size / 1024).toFixed(1)} KB)`);
      } catch (err) {
        console.error(`❌ Erro ao converter ${file}:`, err.message);
      }
    }
  }

  console.log(`\n🎉 Conversão concluída! ${convertedCount} imagens convertidas.`);
  console.log(`💰 Economia total de espaço: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB!`);
}

convertImages();
