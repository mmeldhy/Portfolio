# 🧑‍💻 Dhiya Ulhaq Prima Yuga — Portfolio v2.0

Portfolio website modern yang dibangun dengan **Next.js 15**, **Tailwind CSS v4.2**, dan **TypeScript**.

---

## ✨ Fitur Lengkap

| Fitur | Status |
|-------|--------|
| 🌙 Dark / Light Mode | ✅ tanpa flash, localStorage |
| ⌨️ Command Palette (⌘K) | ✅ keyboard navigation |
| 🔴 GitHub Live (GraphQL) | ✅ pinned repos + contribution graph |
| 📊 Wakatime Coding Stats | ✅ language breakdown |
| 🎮 Easter Egg (Konami Code) | ✅ ↑↑↓↓←→←→BA |
| ✨ Particle Canvas | ✅ interactive mouse-following |
| 📝 Blog / Writing | ✅ local Markdown posts |
| 🧭 Experience Timeline | ✅ org & academic |
| 📱 Mobile Responsive | ✅ hamburger nav |
| 🚀 Loading Screen | ✅ terminal boot animation |
| 🖱️ Custom Cursor | ✅ glowing dot + ring |
| ↑ Back to Top | ✅ scroll progress ring |

---

## 🚀 Setup

### 1. Clone & install
```bash
npm install
```

### 2. Environment variables
```bash
cp .env.local.example .env.local
# Edit .env.local dan isi GITHUB_TOKEN
```

#### Cara buat GitHub Token:
1. Buka https://github.com/settings/tokens/new
2. Pilih **Classic token**
3. Centang: `read:user`, `public_repo`
4. Copy token → paste ke `GITHUB_TOKEN` di `.env.local`

#### Cara aktifkan Wakatime:
1. Buat akun di https://wakatime.com
2. Settings → Account → **Public Profile** → Enable
3. Isi `NEXT_PUBLIC_WAKATIME_USERNAME` di `.env.local`

### 3. Jalankan dev server
```bash
npm run dev
```
Buka http://localhost:3000

---

## 📁 Struktur Proyek

```
portfolio/
├── app/
│   ├── blog/[slug]/page.tsx   # Individual blog post
│   ├── globals.css            # Design tokens + dark/light theme
│   ├── layout.tsx             # Root layout, theme script, global components
│   └── page.tsx               # Main single-page assembly
├── components/
│   ├── Navbar.tsx             # Fixed nav + dark toggle + ⌘K
│   ├── Hero.tsx               # Hero + typewriter + terminal widget
│   ├── About.tsx              # About + stats + progress bars
│   ├── TechStack.tsx          # Skill badges + level indicators
│   ├── Experience.tsx         # Timeline section
│   ├── GitHubProjects.tsx     # 🔴 LIVE: pinned repos + contribution graph
│   ├── WakatimeWidget.tsx     # Coding activity stats
│   ├── Projects.tsx           # Featured research projects
│   ├── BlogSection.tsx        # Blog post cards
│   ├── Contact.tsx            # Contact links + footer
│   ├── CommandPalette.tsx     # ⌘K command modal
│   ├── ThemeToggle.tsx        # Dark/light toggle button
│   ├── ParticleCanvas.tsx     # Interactive particle background
│   ├── EasterEgg.tsx          # Konami code easter egg
│   ├── LoadingScreen.tsx      # Boot animation
│   ├── CustomCursor.tsx       # Glowing cursor
│   └── BackToTop.tsx          # Scroll progress + back to top
├── lib/
│   ├── github.ts              # GitHub GraphQL API
│   └── blog.ts                # Markdown blog reader
├── content/
│   └── blog/                  # Add your .md files here
│       ├── ja4-fingerprinting-malware-detection.md
│       ├── iot-security-wireshark-snort.md
│       └── nextjs-15-portfolio-guide.md
├── public/
│   └── cv.pdf                 # ⚠️ Taruh CV kamu di sini!
├── .env.local.example         # Template env variables
└── README.md
```

---

## ✏️ Kustomisasi

### Ganti info pribadi
| File | Yang diubah |
|------|-------------|
| `app/layout.tsx` | Metadata (title, description) |
| `components/Hero.tsx` | Nama, deskripsi |
| `components/About.tsx` | Bio, universitas |
| `components/TechStack.tsx` | Skills |
| `components/Experience.tsx` | Timeline |
| `components/Projects.tsx` | Research projects |
| `components/Contact.tsx` | Email, LinkedIn, GitHub URL |
| `components/CommandPalette.tsx` | Command list (email, links) |
| `components/WakatimeWidget.tsx` | Username Wakatime |

### Tambah blog post
Buat file `.md` baru di `content/blog/`:
```markdown
---
title: Judul Artikel
date: 2025-06-01
excerpt: Deskripsi singkat artikel.
tags: Cybersecurity, Python
---

Konten artikel di sini...
```

### Pin repos di GitHub
Buka profil GitHub → **Customize your pins** → pilih repos yang ingin ditampilkan.
Portofolio otomatis sinkron setiap 1 jam (ISR).

---

## 🌐 Deploy ke Vercel

```bash
npx vercel

# Set environment variables
vercel env add GITHUB_TOKEN
vercel env add NEXT_PUBLIC_GITHUB_USERNAME
vercel env add NEXT_PUBLIC_WAKATIME_USERNAME
```

---

## 🎮 Easter Egg

Ketik **↑↑↓↓←→←→BA** di keyboard untuk memunculkan kejutan! 🎉

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| Cyan | `#00d9ff` | Primary accent, links |
| Green | `#00ff88` | Success, secondary accent |
| Purple | `#a78bfa` | Blog, wakatime |
| Yellow | `#facc15` | Python, education |
| Font Display | Syne | Headings, nav |
| Font Body | DM Sans | Paragraphs |
| Font Mono | JetBrains Mono | Code, labels |

Made with ❤️ by Dhiya Ulhaq Prima Yuga
