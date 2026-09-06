# Noah Schiro — Portfolio

Personal portfolio and blog, built with React 19, TypeScript, Vite, and Material UI (Gruvbox palette).

## Development

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # typecheck + production build to dist/
npm run lint     # oxlint
npm run preview  # serve the production build locally
```

## Deployment

`npm run build` produces a static site in `dist/`. Host it anywhere that rewrites all paths to `index.html` (standard SPA fallback) so deep links like `/blog/my-post` work on refresh.
