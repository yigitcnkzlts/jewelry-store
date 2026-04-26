/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#faf6f0',
          200: '#f5efe5',
          300: '#ede3d3',
          400: '#e3d5c0',
        },
        gold: {
          400: '#d6ad60',
          500: '#c99a4f',
          600: '#b8893b',
          700: '#9a7230',
        },
        dark: {
          900: '#0f0a06',
          800: '#1a1410',
          700: '#2d2419',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
