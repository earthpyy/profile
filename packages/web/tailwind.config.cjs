const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extends: {
      colors: {
        primary: '#67C785',
      },
    },
  },

  plugins: [require('flowbite/plugin')],
}

module.exports = config
