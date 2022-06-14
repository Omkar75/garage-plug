module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}

// TAILWIND.CONFIG.JS
// module.exports = {
//   content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
//   plugins: [
//     require('tw-elements/dist/plugin')
//   ]
// }