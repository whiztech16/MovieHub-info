/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      primary: '#030014',
      'light-100': '#cecefb',
      'light-200': '#a8b5db',
      'gray-100': '#9ca4ab',
      'dark-100': '#0f0d23',
      white: '#ffffff',
      black: '#000000',
    },
    extend: {
      fontFamily: {
        'dm-sans': '"DM Sans", sans-serif',
      },
      backgroundImage: {
        'hero-pattern': 'url("/hero-bg.png")',
      },
      screens: {
        xs: '480px',
      },
    },
  },
}
