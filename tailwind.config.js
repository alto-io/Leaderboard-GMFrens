module.exports = {
  darkMode: "class", //false, 'class', 'media'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide': {
          '0%' : { transform: 'translate3d(0, 0, 0)'},
          '100%': { transform: 'translate3d(-2002px, 0, 0)' /* The image width */}
        }
      },
      animation: {
        slide: "slide 60s linear infinite"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
