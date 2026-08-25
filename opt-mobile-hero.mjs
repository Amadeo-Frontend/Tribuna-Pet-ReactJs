import sharp from 'sharp';
import fs from 'fs';

async function optimizeHeroMobile() {
  const input = 'public/blog-hero-ranking-mobile.webp';
  const output = 'public/blog-hero-ranking-mobile-v2.webp';

  await sharp(input)
    .resize({ width: 480, withoutEnlargement: true })
    .webp({ quality: 75, effort: 6 })
    .toFile(output);

  const oldSize = fs.statSync(input).size;
  const newSize = fs.statSync(output).size;

  console.log(`📱 Mobile Hero optimizado: ${(oldSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB (-${(((oldSize - newSize) / oldSize) * 100).toFixed(1)}%)`);
}

optimizeHeroMobile();
