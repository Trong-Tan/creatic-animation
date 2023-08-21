/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./**/*.{html,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#6D95FC'
      },
      margin: {
        46: '11.5rem',
        70: '17.5rem'
      },
      padding: {
        68: '17rem',
        70: '17.5rem'
      },
      height: {
        200: '50rem'
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
}
