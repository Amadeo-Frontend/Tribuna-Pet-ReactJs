# 🐾 Tribuna do Pet

**Tribuna do Pet** é um portal feito em **React + Vite** que reúne artigos sobre alimentação saudável, cuidados diários e utilidade pública para cães e gatos. Foco total em **performance**, **SEO** e **experiência mobile-first**. 🚀

![Hero do site](public/og-image-home.jpg)

---

## 📚 Sumário

1. [✨ Principais features](#-principais-features)  
2. [🛠️ Stack & bibliotecas](#️-stack--bibliotecas)  
3. [📂 Estrutura de pastas](#-estrutura-de-pastas)  
4. [⚙️ Configuração](#️-configuração)  
5. [🤝 Contribuindo](#-contribuindo)  
6. [📝 Licença](#-licença)

---

## ✨ Principais features

| Categoria | Descrição |
|-----------|-----------|
| 🔍 **SEO** | Componente `Seo` injeta `<title>`, metas, Open Graph e Twitter Cards via **react-helmet-async** |
| 🗺️ **Routing** | Rotas SPA declaradas no `App.jsx` usando **React Router v6** |
| 🆙 **Scroll Restoration** | Componente `ScrollToTop` garante rolagem 0 × 0 em cada mudança de rota |
| 🎬 **Animações** | Transições de página + componentes com **framer-motion** |
| 📱 **Layout Responsivo** | **Tailwind CSS**; menu lateral mobile off-canvas |
| 🍞 **Toast & Loader** | Loader global (GIF) + toasts via **react-toastify** |
| 💌 **Newsletter** | Formulário conectado ao **EmailJS** – sem backend! |
| ♿ **A11y & Performance** | Imagens otimizadas, preconnect de fontes e JS mínimo |

---

## 🛠️ Stack & bibliotecas

- ⚡ **Vite 5** (template React)  
- ⚛️ **React 18** + **React Router v6**  
- 💨 **Tailwind CSS 3**  
- 🕺 **framer-motion** – animações  
- 🧠 **react-helmet-async** – metas dinâmicas  
- 🎨 **react-icons** – ícones FontAwesome (free)  
- 🔔 **react-toastify** – toasts  
- ✉️ **EmailJS v4** – envio de newsletter  

---

---

## ⚙️ Configuração

### 🖥️ Pré-requisitos

* Node ≥ 18  
* NPM ≥ 9  

### 📦 Instalação

```bash
# clone o repo
git clone https://github.com/seu-usuario/tribuna-pet.git
cd tribuna-pet

# instale dependências
npm install

# dev server com HMR
npm run dev

🔑 Variáveis de ambiente

Crie .env.local:

VITE_EMAILJS_PUBLIC_KEY=xxxxxxxx
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx

📜 Scripts NPM

| Script    | Ação                           |
| --------- | ------------------------------ |
| `dev`     | Dev server Vite                |
| `build`   | Bundle produção em `dist/`     |
| `preview` | Servidor estático para `dist/` |

🤝 Contribuindo

Crie branch feature/xyz ou fix/abc a partir de main 🔀

Commits atômicos com descrição clara ✏️

Rode npm run dev e cheque linter/erros ✅

Abra Pull Request contando o que mudou 📑

Inclua screenshots ou GIFs quando possível 🖼️

📝 Licença

Distribuído sob licença MIT © 2025 Tribuna do Pet. ❤️🐶🐱