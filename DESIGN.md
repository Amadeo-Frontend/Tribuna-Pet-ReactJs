---
# Impeccable Design System Tokens
name: Tribuna do Pet
version: 1.0.0
palette:
  primary: "#0F172A"       # Slate 900 (Navegação & Textos Principais)
  secondary: "#0EA5E9"     # Sky 500 (Acentos Azuis do Portal)
  accent: "#10B981"        # Emerald 500 (Destaques & Selos de Nutrição)
  highlight: "#F59E0B"     # Amber 500 (Avisos, Estrelas e Botões secundários)
  danger: "#EF4444"        # Red 500 (Alertas & Saúde)
  surface: "#FFFFFF"       # Fundo limpo
  surfaceMuted: "#F8FAFC"  # Slate 50 (Cards & fundos suaves)
  border: "#E2E8F0"        # Slate 200 (Bordas refinadas)

typography:
  fontFamilySans: "var(--font-roboto), system-ui, sans-serif"
  fontFamilyHeading: "var(--font-roboto), system-ui, sans-serif"
  fontFamilyMono: "ui-monospace, monospace"
  fontSizeScale:
    xs: "0.75rem"
    sm: "0.875rem"
    base: "1rem"
    lg: "1.125rem"
    xl: "1.25rem"
    2xl: "1.5rem"
    3xl: "1.875rem"
    4xl: "2.25rem"
    5xl: "3rem"

radii:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.75rem"
  xl: "1rem"
  2xl: "1.5rem"
  full: "9999px"

shadows:
  subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05)"
  card: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)"
  hover: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02)"
---

# DESIGN.md — Especificações de Design do Tribuna do Pet

## 1. Visão Geral do Design System
O **Tribuna do Pet** segue a diretriz **Anti-Slop Web UI**, priorizando clareza editorial, acessibilidade (WCAG AA), respostas em tempo real para os tutores de animais e micro-interações elegantes.

## 2. Componentes e Convenções
- **Header:** Fundo branco limpo, logo com gradiente `from-blue-600 to-sky-400` com badge de ícone em relevo `shadow-blue-500/20` e tipografia `uppercase tracking-wider`.
- **Cards de Notícia:** Cantos `rounded-2xl` a `rounded-3xl`, imagem com proporção fluida, badge glassmorphism `backdrop-blur-md` e elevação suave no hover.
- **Footer:** Fundo `bg-slate-900` com trilha interativa de passos coloridos de pet (`<PawPrintTrail />`) no divisor superior.
