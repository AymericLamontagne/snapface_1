const tones = {
  50: "#f1f1f1",
  100: "#dcdcdc",
  200: "#cccccc" /* #00000033 */,
  300: "#858585",
  400: "#747474",
  500: "#595959",
  600: "#323232",
  700: "#2d2d2d",
  800: "#212121" /* #000000DE */,
  900: "#161616",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  darkMode: "class", // false, 'class', 'media'
  theme: {
    extend: {
      colors: {
        // Light theme colors
        invisible: "#00000000",
        primary: "#ececec",
        secondary: "#fff",
        theme: "#fff",
        "text-1": "#151515",
        "text-2": "#2D2D2D",
        scroll: "#e1e1e1",
        "outline-color": "#d0d0d0",

        // Dark theme colors
        "dark-primary": "#505050",
        "dark-secondary": "#1f1f1f",
        "dark-theme": "#464646",
        "dark-text-1": "#ffffff",
        "dark-text-2": "#2D2D2D",
        "dark-scroll": "#3d3d3d",
        "dark-outline-color": "#7e7e7e",

        ddcolor: {
          50: "#e6b5b5" /* Derrière icône page vide mobile, #C5000040 */,
          100: "#edb2b2" /* Background status, #C5000030 */,
          200: "#df7e7e",
          300: "#ef3f3f",
          400: "#FF0000" /* Erreur */,
          500: "#C61617" /* Logo MIR-RT */,
          600: "#C50000" /* Principale couleur */,
          700: "#A00000",
          800: "#630000" /* Dégradé des vagues du login */,
          900: "#4b0000",
        },
        accent: tones,
        tone: tones,
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
