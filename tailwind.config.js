/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'serif': ['Cormorant Garamond', 'serif'],
    },
    extend: {
      colors :{
        'primary': '#44533c',
        'secondary': '#f2f5f0'
      }
    }
  },
}
