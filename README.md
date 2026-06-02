# Radhika Patel — Portfolio (React + Vite)

A bold, animated, single-page developer portfolio built with React and Vite.

## 🚀 How to run

Open this folder in VS Code, then in the terminal run:

```bash
npm install
npm run dev
```

Your portfolio will open at **http://localhost:5173**

## ✏️ How to edit content

All text content (projects, skills, contact info) lives in **one file**:
👉 `src/data.js`

Edit that file to change project descriptions, skills, links, etc. — no need to touch the components.

## 📁 Project structure

```
my-portfolio/
├── public/
│   └── images/              ← SketchRise screenshots (replace these to use your own)
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Work.jsx
│   │   ├── SketchRise.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx              ← Main app
│   ├── data.js              ← ALL CONTENT GOES HERE
│   ├── index.css            ← All styles
│   ├── main.jsx
│   └── useScrollReveal.js   ← Scroll animation hook
├── index.html
├── package.json
└── vite.config.js
```

## 🌐 How to deploy (free)

When you're ready to publish:

```bash
npm run build
```

This creates a `dist/` folder. Then either:

**Option 1 — Netlify (drag & drop):**
1. Go to https://app.netlify.com/drop
2. Drag the `dist` folder onto the page
3. Done — you'll get a live URL

**Option 2 — Vercel:**
1. Push this folder to GitHub
2. Go to https://vercel.com
3. Import your repo — auto-deploys on every push

## 🎨 What's inside

- Bold gradient hero with animated shimmer text
- Animated background blobs
- Scroll-reveal animations on every section
- SketchRise featured project with 3-step visual flow
- Responsive (mobile + desktop)
- All in one file of CSS, easy to customize

Enjoy! 🚀
