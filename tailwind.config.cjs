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
        slideInUp: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        zoomIn: {
          '0%': { transform: 'scale(0.3)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 }
        },
        rotateAndFadeIn: {
          '0%': { transform: 'rotate(-180deg)', opacity: 0 },
          '100%': { transform: 'rotate(0deg)', opacity: 1 }
        },
        blob: {
          '0%': { 'border-radius': '24% 76% 35% 65% / 27% 36% 64% 73%' },
          '100%': { 'border-radius': '24% 76% 35% 65% / 27% 36% 64% 73%' },
          '25%': { 'border-radius': '76% 24% 33% 67% / 68% 55% 45% 32%' }
        }
      },
      animation: {
        slideInUp: 'slideInUp 0.5s ease-in-out',
        fadeInRight: 'fadeInRight 0.5s ease-in-out',
        zoomIn: 'zoomIn 0.5s ease-in-out',
        rotateAndFadeIn: 'rotateAndFadeIn 0.5s ease-in-out'
      },
    },
  },
  plugins: [],
}