/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/layout.tsx',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    "!./node_modules",
 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}