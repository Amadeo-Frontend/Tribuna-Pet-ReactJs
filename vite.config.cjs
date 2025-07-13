// vite.config.cjs
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const vitePrerender = require('vite-plugin-prerender');
const path = require('path');

module.exports = defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/', 
        '/alimentacao-saudavel',
        '/alimentacao-saudavel-e-inteligente',
        '/batata-doce-nutricao-canina',
        '/cuidados-com-pets-no-inverno',
        '/vagas-para-castracao-gratuita',
        '/novo-hospital-veterinario-curitiba',
        '/sobre-nos', 
        '/politica-de-privacidade', 
      ],
    }),
  ],
});
