# UI Component Library Demo

A polished demo project that showcases a growing set of reusable UI components built with React, Vite, TypeScript, and Tailwind CSS. The goal is to give designers and engineers a shared playground where they can review UX patterns, reuse code, and ship consistent interfaces quickly.

---

## Overview
- **Purpose:** Demonstrate how a curated component set can be composed into a cohesive landing experience.
- **Audience:** Design and engineering teams looking for ready-to-ship building blocks.
- **Highlights:** Accessible components, responsive layout, Tailwind utility tokens, and a clean project structure for rapid iteration.

---

## Installation
```bash
git clone <repository-url>
cd ui-components-demo
npm install
```

---

## Usage
- **Start dev server:** `npm run dev`
- **Lint codebase:** `npm run lint`
- **Build for production:** `npm run build`

Visit the local dev URL printed in the terminal (typically http://localhost:5173) to interact with the component gallery.

---

## Component Library
- `Button` – Primary and secondary variants with shared sizing tokens.
- `InputField` – Labeled input with validation messaging and accessible IDs.
- `Card` – Title + description container for grouping related content.
- `Navbar` – Responsive header with desktop links and mobile menu toggle.
- `Hero` – Landing intro block with supporting copy and CTAs.

More components can be dropped into `src/components` as the system evolves.

---

## Screenshots
> _Drop screenshots or animated GIFs here to show the hero, component sampler, and responsive navbar states._

---

## Tech Stack
- **Framework:** React 19 + Vite 7 (TypeScript)
- **Styling:** Tailwind CSS 3 + custom design tokens
- **Tooling:** ESLint for linting, PostCSS + Autoprefixer for styling pipeline

---

## Project Structure
```
src/
  components/   # reusable UI blocks
  pages/        # page-level compositions (future)
  styles/       # global styles and theme tokens
```

---

Happy building! Feel free to fork the project, add more components, and adapt the layout to your product’s needs.
