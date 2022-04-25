const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    colors: {
      primary: '#67C785',
    },
  },

  plugins: [require('flowbite/plugin')],
}

module.exports = config
