import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

const targets = ['./src', './public/sitemap.xml', './public/llms.txt', './public/llms-full.txt'];

targets.forEach((target) => {
  if (fs.existsSync(target)) {
    if (fs.statSync(target).isDirectory()) {
      walkDir(target, (filePath) => {
        if (/\.(jsx|js|ts|tsx|json|xml|txt)$/i.test(filePath)) {
          let content = fs.readFileSync(filePath, 'utf8');
          const updated = content
            .replace(/\.png/g, '.webp')
            .replace(/\.jpg/g, '.webp')
            .replace(/\.jpeg/g, '.webp');
          if (content !== updated) {
            fs.writeFileSync(filePath, updated, 'utf8');
            console.log(`✨ Atualizado: ${filePath}`);
          }
        }
      });
    } else {
      let content = fs.readFileSync(target, 'utf8');
      const updated = content
        .replace(/\.png/g, '.webp')
        .replace(/\.jpg/g, '.webp')
        .replace(/\.jpeg/g, '.webp');
      if (content !== updated) {
        fs.writeFileSync(target, updated, 'utf8');
        console.log(`✨ Atualizado: ${target}`);
      }
    }
  }
});
