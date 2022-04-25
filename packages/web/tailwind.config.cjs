const colors = require('tailwindcss/colors')

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      primary: '#67C785',
    },
  },

  plugins: [require('flowbite/plugin')],
}

module.exports = config
