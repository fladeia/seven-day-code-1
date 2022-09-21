/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'serif': ['Elsie Swash Caps', 'cursive']
    },
    extend: {
      colors: {
        'yellow': '#FFCB47',
        'yellow-light': '#FFCB47',
        'gray': '#202020'
      },
      backgroundImage: {
        'yellow-shape': "url('./src/assets/bg-yellow-shape.svg')",
        'image-card': "url('./src/assets/image-card.png')"
      },
      backgroundSize: {
        'yellow-shape-size': '45%' 
      }
    },
  },
  plugins: [],
}
