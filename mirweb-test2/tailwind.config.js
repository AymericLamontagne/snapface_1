/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  darkMode: 'class', // false, 'class', 'media'
  theme: {
    colors: {
      // Light theme colors
      'primary': '#ececec',
      'secondary-bg': '#fff',
      'theme': '#fff',
      'text-1': '#151515',
      'text-2': '#505050',
      'outline-color': '#d0d0d0',

      // Dark theme colors
      'dark-primary': '#505050',
      'dark-secondary-bg': '#1f1f1f',
      'dark-theme': '#464646',
      'dark-text-1': '#ffffff',
      'dark-text-2': '#dadada',
      'dark-outline-color': '#808080',
    },
    extend: {},
  },
  plugins: [],
}
