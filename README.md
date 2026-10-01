# Adasa

Adasa is a modern Angular-based photography and editorial website focused on showcasing visual stories, articles, categories, and photo-related content in an elegant and responsive design. The app presents a polished blog-style experience for a photography brand, with a landing page, article listing, article details, about page, and legal pages.

## Overview

This project is built as a single-page application using Angular 21 with routing and reusable components. It is designed to feel like a premium digital magazine or photography portfolio, with strong emphasis on editorial layout, storytelling, and clean UI structure.

The application includes:

- A home page with hero content, featured articles, categories, and newsletter signup
- A blog listing page with article cards and category-based browsing
- A detailed article view for individual posts
- An about page introducing the brand and its mission
- Privacy and terms pages for legal information
- A custom not-found redirect flow for invalid routes
- Responsive layout and reusable shared components

## Tech Stack

- Angular 21
- TypeScript
- Angular Router
- Bootstrap 5
- Font Awesome
- Tailwind CSS
- Angular SSR support
- JSON-driven content structure for articles and site metadata

## Main Features

### Home Page
The homepage is built from several reusable section components:

- Hero section
- Featured articles
- Categories
- Latest articles
- Newsletter callout

### Blog Experience
The blog experience is split into two core views:

- Blog list view for browsing multiple posts
- Blog detail view for reading a single article

Each article is modeled with metadata such as title, slug, category, date, image, summary, and content.

### Shared UI Components
The project uses reusable shared components such as:

- Article cards
- Category badges
- Section labels
- Stat cards
- Team member cards
- Legal page templates

### Routing
The app uses Angular routing to handle the following paths:

- `/` — Home
- `/blog` — Blog list
- `/blog/:slug` — Blog detail
- `/about` — About page
- `/privacy` — Privacy policy
- `/terms` — Terms of service
- `/not-found` — Not-found page
- Any unknown route redirects to `/not-found`

## Project Structure

```text
src/
├── app/
│   ├── app.config.ts
│   ├── app.config.server.ts
│   ├── app.routes.ts
│   ├── app.routes.server.ts
│   ├── app.ts
│   ├── app.html
│   ├── app.css
│   ├── core/
│   │   ├── data/
│   │   │   └── posts.json
│   │   ├── layout/
│   │   │   ├── header/
│   │   │   └── footer/
│   │   └── services/
│   ├── features/
│   │   ├── about/
│   │   ├── blog/
│   │   ├── home/
│   │   ├── not-found/
│   │   ├── privacy/
│   │   └── terms/
│   └── shared/
│       ├── components/
│       ├── models/
│       └── utils/
├── index.html
├── main.ts
├── main.server.ts
├── server.ts
└── styles.css
```

## Content and Data Model

The content is organized in a structured model-driven approach. The app leverages shared TypeScript interfaces for:

- Articles
- Categories
- Site metadata
- Policy/legal sections

Article content is stored in the project data layer and used across the UI to render cards, blog entries, and home page sections.

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm start
```

This starts the Angular development server. Open the app in your browser at:

```text
http://localhost:4200/
```

### Production build

```bash
npm run build
```

This compiles the project and generates the production output in the `dist/` folder.

### Run tests

```bash
npm test
```

### Run the SSR server build

```bash
npm run serve:ssr:Adasa
```

## Scripts

The project includes the following npm scripts:

```json
{
  "start": "ng serve",
  "build": "ng build",
  "watch": "ng build --watch --configuration development",
  "test": "ng test",
  "serve:ssr:Adasa": "node dist/Adasa/server/server.mjs"
}
```

## Notes on Architecture

This app follows a clean Angular structure:

- Feature-based folders for page domains such as `home`, `blog`, and `about`
- Shared reusable components under `src/app/shared`
- Core layout code in `src/app/core`
- Router-driven navigation with route titles and fallback behavior
- Type-safe data models for maintainability

## Contributing

To extend the project:

1. Add or update content in data/model files or JSON sources.
2. Create reusable sections in the appropriate feature folder.
3. Keep shared components in `src/app/shared/components`.
4. Update the Angular routes in `src/app/app.routes.ts` when adding new pages.
5. Run the app and verify the UI in the browser after changes.

## License

This project does not include a custom license file in the repository yet, so it should be treated as an internal or educational project unless a license is explicitly added later.

## Summary

Adasa is a visually rich Angular application designed as a photography-focused content platform. It combines editorial storytelling, reusable UI components, structured content modeling, and modern Angular routing to create a complete digital magazine-style experience.
