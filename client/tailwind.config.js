const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gunmetal: {
          500: '#2e3440',
        },
      },
      fontFamily: {
        primary: ['var(--default-font)', ...fontFamily.sans],
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
