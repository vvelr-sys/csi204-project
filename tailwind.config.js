/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#FDFBF7',
          100: '#F9F6F0',
          200: '#F0EAD6',
          300: '#E1D7C1',
          400: '#C5B498',
          500: '#A38F6B',
          600: '#8A7550',
          700: '#6B5A3E',
          800: '#4D412E',
          900: '#2E271C',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E8ECE7',
          200: '#CCD7CB',
          300: '#A9BDA7',
          400: '#84A180',
          500: '#60855C',
          600: '#4C6A48',
          700: '#3D543A',
          800: '#2D3F2B',
          900: '#1D2A1C',
        },
        clay: {
          50: '#FAF5F2',
          100: '#F4EAE3',
          200: '#E7CEBE',
          300: '#DAAD94',
          400: '#CC8A67',
          500: '#BA683C',
          600: '#9B522F',
          700: '#7B4125',
          800: '#5A301B',
          900: '#3B2012',
        },
        moss: {
          light: '#8E9A68',
          DEFAULT: '#606C38',
          dark: '#283618',
        },
        sand: {
          light: '#FEFAE0',
          DEFAULT: '#DDA15E',
          dark: '#BC6C25',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
