/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': 'rgb(15, 23, 42)',
        'slate-opa': 'rgb(148 163 184)',
      },
      fontFamily: {
        'sans': ['Inter Tight', 'sans-serif'],
      },
    },
  },
  plugins: [],
}