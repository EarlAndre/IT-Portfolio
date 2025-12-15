/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bebas Neue", "sans-serif"],
      },
      lineHeight: {
        "extra-tight": "0.9",
      },
    },
  },
  plugins: [],
};
