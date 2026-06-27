# edujbarrios-ui

Self-made UI components ready to copy, paste, and use.

`edujbarrios-ui` is an open-source component gallery by Eduardo J. Barrios. It collects handcrafted React + TypeScript components for modern frontend projects, AI products, dashboards, creative interfaces, and developer tools.

![edujbarrios-ui website screenshot](./public/screenshot.png)

## Why This Exists

This project is both a public UI lab and a practical copy-paste library. The goal is to keep each component small, readable, self-contained, and easy to adapt without requiring a backend, database, private package, or design system lock-in.

Use it to:

- Browse polished dark-mode UI patterns.
- Copy component source code directly from the website.
- Study simple TypeScript + Tailwind component composition.
- Prototype AI product interfaces, dashboards, command surfaces, and utility panels.
- Extend the registry with your own components.

## Features

- Dark-mode-first website using the `edujbarrios.com` color palette
- Searchable and filterable component gallery
- Individual component detail pages
- Live previews for every component
- Copy-to-clipboard source snippets
- Usage examples and accessibility notes
- Local typed component registry
- No backend, no database, no auth
- Ready for GitHub and Vercel

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Local TypeScript data
- Vercel-friendly static rendering

## Component Library

Current components:

- Neon Gradient Button
- Gradient Split Button
- Glass Command Card
- Glass Metric Card
- AI Chat Input
- Neural Search Input
- Streaming Response Bubble
- Prompt Badge
- Shortcut Key
- Agent Step Timeline
- Floating Nav Dock
- Context Menu Panel
- Glow Loader
- Voice Wave Loader
- Copy Code Card
- Source Citation Card
- Model Switcher
- Token Usage Pill
- Modal Shell
- Status Toast Stack

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run lint
npm run build
```

- `npm run dev` starts the local Next.js development server.
- `npm run lint` checks the project with ESLint.
- `npm run build` creates a production build.

## Project Structure

```text
app/
  page.tsx
  about/page.tsx
  components/page.tsx
  components/[slug]/page.tsx
components/
  component-card.tsx
  component-preview.tsx
  code-block.tsx
  copy-button.tsx
  search-and-filter.tsx
  ui/
data/
  component-code.ts
lib/
  components.ts
  config.ts
  utils.ts
public/
  favicon.svg
  screenshot.png
```

## Adding A Component

To add a new component:

1. Create a self-contained component in `components/ui`.
2. Add its copyable source string to `data/component-code.ts`.
3. Add metadata to `lib/components.ts`.
4. Register the preview in `components/component-preview.tsx`.
5. Run `npm run lint` and `npm run build`.

Each registry item should include:

- `slug`
- `name`
- `description`
- `category`
- `tags`
- `difficulty`
- `code`
- `usage`
- `accessibility`

## Deployment

This repository is intended to live publicly at:

```text
https://github.com/edujbarrios/edujbarrios-ui
```

The website is intended to be deployed on Vercel at:

```text
https://edujbarrios-ui.vercel.app
```

No environment variables are required for the current version.

## Contributing

Contributions are welcome. Please keep components:

- Self-contained
- Typed with TypeScript
- Styled with Tailwind CSS
- Readable and easy to copy
- Responsive where relevant
- Accessible where possible
- Free of backend or private-service assumptions

## License

This project is licensed under the Mozilla Public License 2.0. See [LICENSE](./LICENSE).

Attribution is requested when using, sharing, adapting, or redistributing this project. Please preserve the author credit in [NOTICE.md](./NOTICE.md).

## Author

Built by Eduardo J. Barrios.

- Handle: `edujbarrios`
- GitHub: <https://github.com/edujbarrios/edujbarrios-ui>
