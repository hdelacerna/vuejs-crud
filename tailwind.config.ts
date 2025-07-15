// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./formkit.theme.ts"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}