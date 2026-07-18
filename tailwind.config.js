/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
     colors: {
      ink: "#241C55",
      indigo: "#3B2F7A",
      accent: "#F2A65A",
      "accent-dark": "#D98A3D",
      "accent-soft": "#FDEEDD",
      graybg: "#F7F5FB",
      border: "#E7E2F0",
      muted: "#6B6690",
      ok: "#059669",
    },
      fontFamily: {
        display: ["'Space Grotesk'", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
}
