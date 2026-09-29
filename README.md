# Your Name | Developer Portfolio

A dark, premium developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build is written to `dist/` — you can deploy that folder to
Vercel, Netlify, GitHub Pages, or any static host.

## How to customize

Everything you're likely to want to change lives in `src/data/`, so you
should never need to touch component code just to update your info.

| File | What it controls |
| --- | --- |
| `src/data/personal.ts` | Name, title, bio, contact info, resume path, social links, hero/about images, the four "About Me" info cards |
| `src/data/skills.ts` | Tech skill categories and the technologies inside each |
| `src/data/projects.ts` | Project cards, tags, category, and GitHub/Live Demo links |
| `src/data/education.ts` | Education timeline entries |
| `src/data/experience.ts` | Internships/work experience (leave the array empty to show the "open to opportunities" message) |
| `src/data/certifications.ts` | Certifications & achievements — **replace the placeholder entries with your real credentials** |
| `src/data/codingProfiles.ts` | GitHub, LeetCode, CodeChef, HackerRank, Codeforces cards |

### Images

Drop your images into `src/assets/images/` (profile photo, about photo,
project screenshots) and point the relevant `YOUR_*` fields at them, e.g.:

```ts
profileImage: "/src/assets/images/profile.jpg",
```

Any field still starting with `YOUR_` is treated as "not filled in yet" and
that part of the UI (an image, a project button, a certificate link, etc.)
gracefully hides or falls back to a placeholder instead of showing a broken
link.

### Resume

Put your resume PDF in `public/` (e.g. `public/resume.pdf`) and set:

```ts
resumeFile: "/resume.pdf",
```

in `src/data/personal.ts`.

### Contact form

The contact form validates input but does **not** pretend to send a message —
there's no backend wired up yet. When you're ready, connect it to
Formspree, EmailJS, or your own API inside the `handleSubmit` function in
`src/components/Contact.tsx`.

### Theme

Dark/light mode is stored in `localStorage` and toggled from the navbar. The
color tokens live in `tailwind.config.js` under `theme.extend.colors` if you
want to adjust the palette.

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- lucide-react + react-icons (technology and platform logos)
