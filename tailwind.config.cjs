/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/index.html',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        praise: ['Praise', 'cursive'],
      },
      keyframes: {
        slideFromTop : {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        showTop: {
          '0%': { transform: 'translate3d(0, 100%, 0)', opacity: '0' },
          // '40%, 60%': { transform: 'translate3d(0, 50%, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)', opacity: '1' }
        },
        showTopFadeIn: {
          '0%': { transform: 'translate3d(0, 100%, 0)', opacity: '0' },
          // '40%, 60%': { transform: 'translate3d(0, 50%, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)', opacity: '1'}
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
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        splashScreenGoogle: {
          '0%': { 'background-color':  '#FFFFFF', transform: 'translateY(0%)'},
          '20%': { 'background-color': '#141E26', transform: 'translateY(0%)' },
          '80%': { 'background-color': '#141E26', transform: 'translateY(0%)' },
          '90%': { 'background-color': '#FFFFFF', transform: 'translateY(100%)' },
        },
        splashScreenHamoc: {
          '0%': { 'background-color':  '#FFFFFF', transform: 'translateY(0%)'},
          '20%': { 'background-color': '#d64a58', transform: 'translateY(0%)' },
          '80%': { 'background-color': '#d64a58', transform: 'translateY(0%)' },
          '90%': { 'background-color': '#FFFFFF', transform: 'translateY(100%)' },
        },
        splashScreenMetlife: {
          '0%': { 'background-color':  '#FFFFFF', transform: 'translateY(0%)'},
          '20%': { 'background-color': '#0487ce', transform: 'translateY(0%)' },
          '80%': { 'background-color': '#0487ce', transform: 'translateY(0%)' },
          '90%': { 'background-color': '#FFFFFF', transform: 'translateY(100%)' },
        },
        blob: {
          '0%': { 'border-radius': '24% 76% 35% 65% / 27% 36% 64% 73%' },
          '100%': { 'border-radius': '24% 76% 35% 65% / 27% 36% 64% 73%' },
          '25%': { 'border-radius': '76% 24% 33% 67% / 68% 55% 45% 32%' }
        }
      },
      animation: {
        'slideInFromTop': 'slideFromTop 1.2s cubic-bezier(0, 0, 0.2, 1)',
        'showTop': 'showTop 1s ease-in-out 1.5s forwards',
        'showTopFadeIn': 'showTopFadeIn 1s ease-in-out forwards',
        'showBottom': 'showBottom 1s ease-in-out forwards',
        'showLeft': 'showLeft 0.4s ease-in-out forwards',
        'showRight': 'showRight 0.4s ease-in-out forwards',
        'scaleFromZero': 'scaleFromZero 0.5s cubic-bezier(0, 0, 0.2, 1) forwards',
        'fadeIn': 'fadeIn 1s ease-in-out forwards',
        'splashScreenGoogle': 'splashScreenGoogle 1s ease-out forwards',
        'splashScreenHamoc': 'splashScreenHamoc 1s ease-out forwards',
        'splashScreenMetlife': 'splashScreenMetlife 1s ease-out forwards',
        'blob': 'blob 10s ease-in-out infinite;'
      }
    },
  },
  plugins: [],
}