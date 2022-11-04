/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "linear-gradient(to right bottom, rgba(170, 105, 255, 0.75), rgba(0, 0, 50, 0.75)), url('@/assets/bg.jpg')",
        'coins': "linear-gradient(to right bottom, rgba(170, 105, 255, 1), rgba(0, 0, 50, 1))",
        'ethereum': "linear-gradient(to right bottom, rgba(182, 94, 186, 1), rgba(0, 0, 50, 0.75))"
      },
      fontFamily: {
        'inter': 'Inter, sans-serif',
        'poppins': 'Poppins, sans-serif'
      },
      colors: {
        'primary': {
          100: '#aa69ff',
          200: '#894adc',
        },
        'secondary': '#000032',
        'white': "#f5f5f7",
      },
      keyframes:{
        enterInLeft: {
          '0%': {transform: 'translateX(-100px)', opacity: 0},
          '70%': {transform: 'translateX(10px)'},
          '100%': { opacity: 1, transform: 'translateX(0)'}
        },
        enterInUp: {
          '0%': {transform: 'translateY(100px)', opacity: 0},
          '70%': {transform: 'translateY(-5px)'},
          '100%': { opacity: 1, transform: 'translateY(0)'}
        },
        fadeIn: {
          '0%': {opacity: 0},
          '100%': { opacity: 1}
        }
      },
      animation: {
        enterInLeft: 'enterInLeft 1.25s ease-out',
        enterInUp: 'enterInUp 1.25s ease-in-out',
        fadeIn: 'fadeIn 1s ease-out .75s backwards'
      }
    },
  },
  plugins: [],
}