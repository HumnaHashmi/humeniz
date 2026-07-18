# Humeniz Website (React)

Same design, colors, and animations as the HTML version — rebuilt as a proper
React project (Vite + Tailwind + Framer Motion) so you can extend it, add
pages, and eventually move it into Next.js if you want.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL it shows you (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This creates a `dist/` folder with the final static site — that's the folder
you deploy.

## Deploy it (easiest path)

1. Go to **app.netlify.com/drop**
2. Drag the `dist/` folder into the browser window
3. You get a live link instantly

Or connect this whole project to **Vercel** / **Netlify** via GitHub for
automatic deploys every time you push a change.

## Project structure

```
src/
  App.jsx              -> assembles all sections
  components/
    Navbar.jsx
    Hero.jsx            -> headline + animated "AI team" dashboard panel
    TrustedBy.jsx        -> scrolling industries ticker
    Problems.jsx         -> "problems we solve" cards
    Solutions.jsx        -> "meet your AI team" cards
    HowItWorks.jsx        -> 5-step process
    BeforeAfter.jsx       -> before/after comparison
    WhyHumeniz.jsx        -> why choose us
    CTA.jsx               -> final call to action
    Footer.jsx
    Reveal.jsx            -> reusable scroll-in animation wrapper
```

To edit any section's text, open its file directly — the copy is plain
strings near the top of each file, not buried in markup.
