/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        coral: {
          50: '#fff1f0',
          100: '#ffe0dd',
          200: '#ffc5be',
          300: '#ffa4a0',
          400: '#ff7b75',
          500: '#ff554e',
          600: '#ff382f',
          700: '#ff1a0e',
          800: '#e60000',
          900: '#bf0000',
        },
        honey: {
          50: '#fffbeb',
          100: '#fff4d6',
          200: '#ffedb3',
          300: '#ffe580',
          400: '#ffd94d',
          500: '#ffcc1a',
          600: '#ffbf00',
          700: '#e6ac00',
          800: '#bf8f00',
          900: '#996600',
        },
      },
      fontFamily: {
        sans: ['Source Sans 3', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
