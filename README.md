# Ravindu Portfolio

![visitor badge](https://visitor-badge.laobi.icu/badge?page_id=aleph-discord-bot.visitor-badge)

Personal portfolio website built with Next.js 15, featuring Framer Motion animations and Tailwind CSS. The site showcases projects from a JSON data source and structured SEO.

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Features

- **Fullpage Scrolling** — Section-based navigation on the home page with sidebar active indicator
- **Smooth Page Transitions** — Fade + scale animation between routes via Framer Motion
- **Scroll Animations** — Staggered entrance animations on skills, experience, and project sections
- **Dynamic Project Data** — Projects loaded from a JSON file with category filtering and detail pages
- **Skeleton & Blur Loading** — Project images load with blur placeholder and skeleton overlay
- **SEO** — Per-page metadata, OpenGraph tags, and JSON-LD Person structured data
- **Responsive** — Scales smoothly across browser zoom levels (100%–150%)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Poppins, Jost (self-hosted via next/font)
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/)

### Installation

```bash
git clone https://github.com/Alvalens/Alvalens-porto-2-nextJs.git
cd Alvalens-porto-2-nextJs
pnpm install
```

### Development

```bash
pnpm dev
```

### Production Build

```bash
pnpm build
pnpm start
```

## Project Structure

```
app/
├── layout.jsx          # Root layout (Navbar, Analytics, JSON-LD)
├── globals.css         # Global styles and Tailwind
├── (root)/             # Home page with full-height scroll sections
│   ├── layout.jsx      # Sidebar
│   └── page.jsx        # Hero, About, Projects, Contact sections
├── about/              # About page
│   └── components/     # Skills, Experience, Education, Quote
├── projects/           # Projects listing with filtering
│   ├── [slug]/         # Dynamic project detail pages
│   └── archive/        # Full project archive
components/             # Shared UI (Navbar, Sidebar, Footer, Button, etc.)
json/data.json          # Project data source
public/image/           # Static images
```

## Pages

### Home

Introduction with full-height scroll sections — Hero, About preview, Projects preview, and Contact with social links. Includes a scroll indicator on first load.

### About

Detailed bio, skills with category filtering, work experience timeline, education

### Projects

Filterable project grid (Web, AI/ML, Other). Each project links to a detail page with full description, tech stack, links, and image gallery.

### Contact

Email and social links (GitHub, Instagram, LinkedIn, Discord).

## Customization

### Project Data

Edit `json/data.json` to add or modify projects. See [CLAUDE.md](CLAUDE.md) for the data schema.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

## Inspiration

- [frans.my.id](https://www.frans.my.id/)
- [kuon-yagi-portfolio](https://kuon-yagi-portfolio.netlify.app/)

## License

This project is licensed under the GPL-3.0 License — see the [LICENSE](LICENSE) file for details.

Copyright (C) 2025 Alvalen Shafelbilyunazra
