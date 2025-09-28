/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./dist/main.js"],
  theme: {
    container: {
        center: true,
        padding: '16px',
      },
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
    },
    },
  },
  plugins: [],
}

