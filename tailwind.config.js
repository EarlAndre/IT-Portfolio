/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // scans your root HTML
    "./src/**/*.{js,jsx,ts,tsx}", // scans all React components
  ],
  theme: {
    extend: {},               // for custom colors, fonts, etc.
  },
  plugins: [],               // add Tailwind plugins if needed
}
