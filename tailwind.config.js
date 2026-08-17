/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#49B6E5",
        secondary: "#263D5B",
        success: "#16A34A",
        warning: "#D97706",
        danger: "#DC2626",
        surface: "#FFFFFF",
        darktext: "#111827",
      },
      fontFamily: {
        comic: ['"Comic Neue"', '"Delius Swash Caps"', 'cursive', 'sans-serif'],
        arabic: ['"Tajawal"', '"Cairo"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        sketch: "4px 4px 0px 0px #263D5B",
        sketchSm: "2px 2px 0px 0px #263D5B",
        sketchLg: "6px 6px 0px 0px #263D5B",
        sketchSky: "4px 4px 0px 0px #49B6E5",
      },
      borderRadius: {
        "hand": "255px 15px 225px 15px/15px 225px 15px 255px",
        "hand-lg": "255px 25px 225px 25px/25px 225px 25px 255px",
      },
    },
  },
  plugins: [],
}
