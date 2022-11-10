/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  darkMode: "class", // false, 'class', 'media'
  theme: {
    extend: {
      colors: {
        // Light theme colors
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
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
