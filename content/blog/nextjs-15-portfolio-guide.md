---
title: Membangun Portfolio dengan Next.js 15 App Router dan Tailwind CSS v4
date: 2025-05-01
excerpt: Step-by-step guide membangun website portofolio modern menggunakan Next.js 15 App Router, Tailwind CSS v4.2, dan TypeScript dengan desain dark-mode aesthetic.
tags: Next.js, Tailwind CSS, TypeScript, Web Dev
---

## Stack yang Digunakan

- **Next.js 15** — React framework dengan App Router
- **Tailwind CSS v4.2** — CSS-first utility framework
- **TypeScript** — Type safety
- **Google Fonts** — Syne + DM Sans + JetBrains Mono

## Kenapa App Router?

App Router (introduced di Next.js 13) membawa beberapa keunggulan:

1. **Server Components** — Fetch data langsung di komponen tanpa client-side JS
2. **Streaming** — Render bertahap untuk performa lebih baik
3. **Nested Layouts** — Reuse layout tanpa re-render
4. **Built-in ISR** — `next: { revalidate: 3600 }` langsung di fetch

## Setup Tailwind CSS v4

Di versi 4, konfigurasi pindah ke CSS:

```css
/* globals.css */
@import "tailwindcss";

@theme {
  --font-display: "Syne", sans-serif;
  --color-cyan: #00d9ff;
  --color-green: #00ff88;
}
```

Tidak perlu `tailwind.config.js` lagi!

## GitHub Integration

Dengan Server Components, fetch data dari GitHub API sangat mudah:

```tsx
// components/GitHubProjects.tsx
import { getGitHubData } from "@/lib/github";

export default async function GitHubProjects() {
  const data = await getGitHubData("username");
  // Render langsung — no useEffect, no loading state
  return <div>{data?.pinnedItems.nodes.map(repo => ...)}</div>;
}
```

## Deployment ke Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables
vercel env add GITHUB_TOKEN
```

Setelah deploy, setiap push ke main akan auto-deploy!
