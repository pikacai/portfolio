/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/index.html',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        slideFromTop : {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        showTop: {
          '0%': { transform: 'translate3d(0, 100%, 0)' },
          // '40%, 60%': { transform: 'translate3d(0, 50%, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' }
        },
        showBottom: {
          '0%': { transform: 'translate3d(0, -100%, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' }
        },
        showLeft: {
          '0%': { transform: 'translate3d(-200%, 0, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' }
        },
        showRight: {
          '0%': { transform: 'translate3d(200%, 0, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' }
        },
        scaleFromZero: {
          '0%': { scale: '0' },
          '100%': { scale: '1'}
        }
      },
      animation: {
        'slideInFromTop': 'slideFromTop 1.2s cubic-bezier(0, 0, 0.2, 1)',
        'showTop': 'showTop 0.4s ease-in-out forwards',
        'showBottom': 'showBottom 0.5s ease-in-out forwards',
        'showLeft': 'showLeft 0.4s ease-in-out forwards',
        'showRight': 'showRight 0.4s ease-in-out forwards',
        'scaleFromZero': 'scaleFromZero 0.5s cubic-bezier(0, 0, 0.2, 1) forwards'
      }
    },
  },
  plugins: [],
}