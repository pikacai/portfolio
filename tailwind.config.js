/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slideInUp": 'slideInUp 0.5s ease-in-out',
        "fadeInRight": 'fadeInRight 0.5s ease-in-out',
        "zoomIn": 'zoomIn 0.5s ease-in-out',
        "rotateAndFadeIn": 'rotateAndFadeIn 0.5s ease-in-out',
        "scaleOut": "scaleOut 0.5s ease-in-out forwards"
      },
      fontFamily: {
        praise: ['Praise', 'cursive'],
      },
      keyframes: {
        scaleOut: {
          '0%': { transform: 'scale(0)', display: 'hidden'},
          '100%': { transform: 'scale(1)', display: 'flex'}
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
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
    },
  },
  plugins: [require("tailwindcss-animate")],
}