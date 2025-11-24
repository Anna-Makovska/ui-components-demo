## Contributing Guidelines

Thanks for helping improve the UI Component Library Demo! This repo showcases best practices for building and composing reusable UI blocks—please help us keep it clean and consistent.

### Getting Started
1. Fork the repository and create a feature branch:
   ```bash
   git checkout -b feat/short-feature-name
   ```
2. Install dependencies and run the dev server:
   ```bash
   npm install
   npm run dev
   ```
3. Keep changes focused and easy to review; open separate PRs for unrelated work.

### Code Style
- Use TypeScript for all new components.
- Prefer composition over deeply nested props.
- Use Tailwind utility classes; add custom CSS only in `src/styles` when necessary.
- Follow the existing folder structure (`components`, `pages`, `styles`).

### Component Checklist
- [ ] Includes Story or demo usage in `App.tsx` (temporary until Storybook/Docs site exists).
- [ ] Handles focus states, keyboard interactions, and ARIA attributes as needed.
- [ ] Provides variants and default props that mirror the design system.
- [ ] Includes responsive behavior if applicable.

### Linting & Testing
- Run `npm run lint` before opening a PR.
- Add unit tests (coming soon) for logic-heavy components.

### Pull Request Tips
- Use descriptive titles (e.g., `feat(button): add tertiary variant`).
- Explain UX decisions, design references, and accessibility considerations.
- Attach screenshots or GIFs for visual changes.

### Reporting Issues
Please open issues with:
- Clear reproduction steps.
- Screenshots or screen recordings.
- Expected vs. actual behavior.

---

Thanks for contributing and helping others ship better UIs faster! 🎨⚡

