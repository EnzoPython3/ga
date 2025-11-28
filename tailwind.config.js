/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0F172A', // Justice Navy
          gold: '#C5A059', // Goldman Gold
          white: '#FFFFFF', // Legal White
        },
        secondary: {
          slate: '#64748B', // Slate Gray
          cream: '#FDFBF7', // Soft Cream
          red: '#EF4444', // Alert Red
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
