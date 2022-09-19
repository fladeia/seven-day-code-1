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
        'image-card': "url('./src/assets/image-card.png')",
        'image-card-small-1': "url('./src/assets/card-small-image-1.png')",
        'image-card-small-2': "url('./src/assets/card-small-image-2.png')",
        'image-card-small-3': "url('./src/assets/card-small-image-3.png')",
        'image-card-small-4': "url('./src/assets/card-small-image-4.png')",
        'image-card-small-5': "url('./src/assets/card-small-image-5.png')",
        'image-card-small-6': "url('./src/assets/card-small-image-6.png')"
      },
      backgroundSize: {
        'yellow-shape-size': '45%' 
      }
    },
  },
  plugins: [],
}
