/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Onest Variable', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};