# Vijayakumaran A — DevOps & Cloud Portfolio

A modern, high-performance personal portfolio website for **Vijayakumaran A**, Senior Technical Operations Engineer (AWS / DevOps). Handcrafted with an engineering console aesthetic, glassmorphism, 3D interaction, smooth animations, and light/dark mode support.

---

## ⚡ Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS (class-based dark mode, custom dark/light engineering palette)
- **Animations**: Framer Motion (page load intro, scroll reveals, layout animations)
- **3D Graphics**: Three.js + `@react-three/fiber` + `@react-three/drei` (lazy-loaded low-poly wireframe & floating particles, respects reduced motion)
- **Icons**: `lucide-react` (UI glyphs) + `react-icons` (Simple Icons & FontAwesome for tech brands)
- **Micro-Delights**: `canvas-confetti` (for resume downloads & contact transmissions), interactive auto-typing terminal card, dynamic cursor spotlight, 3D tilt cards with mouse-following radial borders

---

## 🚀 Quick Start

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 📁 Project Architecture

```
g:/Projects/Vijay/
├── public/
│   ├── favicon.svg                  # Custom tech console favicon
│   ├── Vijayakumaran_Resume.pdf     # Resume PDF download
│   └── images/
│       ├── vijay-cutout.png         # Transparent cutout photo for Hero
│       ├── vijay-cutout-portrait.png# Portrait cutout
│       ├── vijay-cutout-fullbody.png# Full-body cutout
│       └── vijay-avatar.png         # Crop for navbar & metadata
├── src/
│   ├── types/
│   │   └── index.ts                 # Typed schemas for Profile, Skills, Projects, Experience
│   ├── data/
│   │   ├── profile.ts               # Personal bio, stats, education, links
│   │   ├── skills.ts                # 8 categorized skill domains & marquee logos
│   │   ├── experience.ts            # Detailed achievements at Pranion Tech Ventures
│   │   └── projects.ts              # 6 production architectures & case studies
│   ├── hooks/
│   │   ├── useTheme.ts              # Dark/light theme with View Transitions API support
│   │   └── useMousePosition.ts      # Normalized coordinates for 3D tilt and cursor glow
│   ├── lib/
│   │   └── utils.ts                 # clsx and tailwind-merge helper
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── Hero3DScene.tsx      # R3F wireframe icosahedron & cloud particles
│   │   │   └── SceneFallback.tsx    # Smooth CSS orbit ring fallback
│   │   ├── ui/
│   │   │   ├── TiltCard.tsx         # 3D perspective tilt with cursor-following border glow
│   │   │   ├── MagneticButton.tsx   # Spring physics magnetic pull button
│   │   │   ├── TerminalCard.tsx     # Auto-typing live deployment sequence
│   │   │   ├── ArchDiagram.tsx      # Interactive sequential live architecture flow
│   │   │   ├── ProjectModal.tsx     # Case Study & Architecture deep-dive modal
│   │   │   ├── TechBadge.tsx        # Styled technology badge with brand icon
│   │   │   ├── TechIcon.tsx         # Unified Simple Icons & Lucide renderer
│   │   │   ├── Toast.tsx            # Floating glass notification banner
│   │   │   └── NoiseBackground.tsx  # Engineering blueprint grid & ambient glows
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Floating glass pill navbar with theme morph
│   │   │   ├── Footer.tsx           # Operations hub, links, and back-to-top
│   │   │   ├── CursorGlow.tsx       # Desktop-only spotlight follow
│   │   │   └── ScrollProgressBar.tsx# Top gradient scroll progress bar
│   │   └── sections/
│   │       ├── Hero.tsx             # Two-column split hero with cutout centerpiece
│   │       ├── About.tsx            # Asymmetric bio, currently card, education
│   │       ├── Skills.tsx           # Bento grid with instant filter & marquee
│   │       ├── Experience.tsx       # Vertical animated timeline with expandable bullets
│   │       ├── Projects.tsx         # Large featured flagship + 2-col cards with modal
│   │       └── Contact.tsx          # Copyable cards, validation form, toast feedback
│   ├── App.tsx                      # Root component with splash intro
│   ├── main.tsx                     # React DOM entry point
│   └── index.css                    # Design tokens & glassmorphism utilities
├── index.html                       # SEO metadata, Open Graph, fonts, JSON-LD Person
├── tailwind.config.js               # Theme colors, animations & keyframes
└── vite.config.ts                   # Path aliases and server config
```

---

## 🎨 How to Edit Content

All website content is cleanly separated from UI code:

1. **Profile, Stats & Bio**:
   Edit `src/data/profile.ts` to update your summary, phone, email, LinkedIn, or quick facts.
2. **Skills & Tech Stack**:
   Edit `src/data/skills.ts` to add or remove tools from any of the 8 categories.
3. **Work Experience**:
   Edit `src/data/experience.ts` to update your role achievements and technical bullets.
4. **Projects & Architecture Case Studies**:
   Edit `src/data/projects.ts` to update problem statements, approaches, diagrams, or results.
5. **Resume PDF**:
   Replace `public/Vijayakumaran_Resume.pdf` with your updated PDF at any time.
6. **Hero Photo Cutout**:
   The photos you provided have been processed with AI background removal and saved to `public/images/vijay-cutout.png`. To use another photo in the future, save a transparent PNG to that location.

---

## 🌐 Deploying to Vercel or Netlify

### Deploy to Vercel
1. Push your repository to GitHub.
2. Import the repo in [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository in [Netlify](https://netlify.com).
2. Build Command: `npm run build`.
3. Publish Directory: `dist`.
4. Click **Deploy Site**.

### Environment Variables (Optional)
If connecting the contact form to a live Formspree endpoint:
- `VITE_FORMSPREE_ENDPOINT`: `https://formspree.io/f/your_form_id`
