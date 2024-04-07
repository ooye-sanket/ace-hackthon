/** @type {import('tailwindcss').Config} */


const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "product-manrope": ["Manrope", "sans-serif"],
        "product-bungee": ["Bungee", "cursive"],
      },
      fontSize: {
        "product-xl": '1.6875rem',
        "product-sm": '0.8125rem',
      },
      colors: {
        "product-red": "#FF4E4E",
        "product-pink": "#FF008A",
        "product-orange": "#FF833E",
        "product-purple-dark": "#5B23FA",
        "product-purple-light": "#7C4EFF",
        "product-teal": "#12C0AB",
        "product-yellow": "#FFB800",
        "product-blue": "#4E95FF",
        "product-brown": "#231C18",
      },
    },
  },
  plugins: [
  ],
});
