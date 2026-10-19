# Plano: Dashboard Administrativo, Gerenciador de Posts e Otimizador WebP

## 1. Visão Geral
Criação de um Dashboard administrativo completo em Next.js para gerenciamento de matérias e upload de imagens com compressão e conversão automática para WebP, sem banco de dados externo (armazenamento baseado em arquivos JSON e sistema de arquivos do repositório).

## 2. Tarefas de Implementação

### Fase 1: Autenticação Segura & Configuração
- [x] Instalar `sharp` para conversão e compressão WebP de alta performance.
- [ ] Criar `.env.local` com `ADMIN_USER`, `ADMIN_PASSWORD` e `ADMIN_SECRET`.
- [ ] Implementar módulo utilitário de autenticação `src/lib/auth.js` com assinatura de token e cookies HTTP-only.
- [ ] Criar rotas de autenticação:
  - `POST /api/admin/login`
  - `POST /api/admin/logout`
  - `GET /api/admin/me`

### Fase 2: APIs de Mídia e Posts
- [ ] Criar rota `POST /api/admin/images/upload` para receber imagens, converter para WebP otimizado com `sharp` e salvar em `public/images/`.
- [ ] Criar rota `GET /api/admin/images` para listar imagens existentes em `public/images/` com metadados (tamanho, data).
- [ ] Criar estrutura de dados `src/data/posts.json`.
- [ ] Criar rotas CRUD:
  - `GET /api/admin/posts` (retorna posts dinâmicos + lista de legados)
  - `POST /api/admin/posts` (cria novo post)
  - `PUT /api/admin/posts` (edita post existente)
  - `DELETE /api/admin/posts` (exclui post)

### Fase 3: Renderização Dinâmica e Compatibilidade no Blog
- [ ] Criar componente de modelo `src/components/DynamicPostTemplate.jsx` para renderizar matérias do `posts.json` com o design system do blog (breadcrumbs, relógio, layout fluido, fontes e SEO).
- [ ] Atualizar `src/app/[slug]/page.jsx` para unificar a busca: se for artigo legado JSX, renderiza o componente legado; se for do `posts.json`, renderiza `DynamicPostTemplate`.
- [ ] Atualizar `generateMetadata` e `generateStaticParams` para incluir posts dinâmicos.

### Fase 4: Interface do Dashboard (Frontend)
- [ ] Criar página de Login `src/app/admin/login/page.jsx` com estética moderna, dark/light mode e feedback visual.
- [ ] Criar painel principal `src/app/admin/page.jsx`:
  - **Aba Visão Geral**: Métricas de posts, contagem de imagens, espaço utilizado.
  - **Aba Matérias**: Listagem, busca, filtro e editor completo de posts (título, slug automático, categoria, imagem de capa, conteúdo, pré-visualização).
  - **Aba Galeria WebP**: Upload Drag & Drop com conversão imediata para WebP, estatísticas de compressão (% economizado), galeria visual com busca e botão de copiar link.

### Fase 5: Verificação e Testes
- [ ] Testar fluxo de login/logout.
- [ ] Testar upload e conversão de PNG/JPG para `.webp`.
- [ ] Testar criação e edição de post.
- [ ] Testar visualização do post criado em `/[slug]`.
- [ ] Confirmar git status e comitar como Amadeo Bon via SSH.
