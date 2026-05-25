# Kavita Tiwari — Portfolio

Premium personal portfolio for **Kavita Tiwari**, Chartered Accountant and Finance Automation & Business Analysis professional.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide React** icons
- **next-themes** (dark/light mode)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Layout, page, global styles
├── components/
│   ├── effects/      # Particle & dashboard backgrounds
│   ├── layout/       # Navbar, Footer, PageLoader
│   ├── providers/    # Theme provider
│   ├── sections/     # All page sections
│   └── ui/           # Reusable UI components
├── data/             # JSON-like data modules
├── hooks/            # Scroll spy, etc.
└── lib/              # Utilities
```

## Customization

- **Resume**: Replace `public/resume.pdf` with the actual resume
- **Contact info**: Update `src/components/sections/Contact.tsx`
- **Certification URLs**: Update `src/data/certifications.ts`
- **Profile photo**: Replace placeholder in `About.tsx` and `Hero.tsx`

## Features

- Sticky navbar with scrollspy
- Dark/light mode toggle
- Expandable project case studies with tabs
- Certification filter chips
- Animated KPI counters
- Form validation on contact form
- Page load animation
- Glassmorphism & gradient effects
- Fully responsive mobile-first design
# kavita-portfolio
