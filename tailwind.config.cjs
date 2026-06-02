/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
        display: ["'Space Grotesk'", "Inter", "system-ui", "sans-serif"],
        praise: ["Praise", "cursive"],
      },
      colors: {
        ink: {
          DEFAULT: "#0B0B12",
          soft: "#1B1B23",
          muted: "#5B5B6B",
        },
        brand: {
          blue: "#0D8CFF",
          cyan: "#00B3E4",
          violet: "#AF16F4",
          orange: "#FF7535",
        },
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(89.19deg, #0D8CFF 0.7%, #00B3E4 31.51%, #AF16F4 62.33%, #FF7535 99.31%)",
        "brand-gradient-soft":
          "linear-gradient(89.19deg, rgba(13,140,255,0.12) 0.7%, rgba(80,216,253,0.12) 33.24%, rgba(212,154,238,0.12) 62.33%, rgba(252,150,103,0.12) 99.31%)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,11,18,0.04), 0 8px 24px rgba(11,11,18,0.06)",
        lift: "0 24px 60px -20px rgba(11,11,18,0.25)",
        glow: "0 0 0 1px rgba(13,140,255,0.15), 0 20px 60px -15px rgba(175,22,244,0.35)",
      },
      keyframes: {
        slideInUp: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        zoomIn: {
          "0%": { transform: "scale(0.3)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        scaleFromZero: {
          "0%": { transform: "scale(0)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        showTop: {
          "0%": { transform: "translateY(-40px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        showBottom: {
          "0%": { transform: "translateY(40px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        showTopFadeIn: {
          "0%": { transform: "translateY(-20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        splashScreenHamoc: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(1.2)", opacity: 0 },
        },
        rotateAndFadeIn: {
          "0%": { transform: "rotate(-180deg)", opacity: 0 },
          "100%": { transform: "rotate(0deg)", opacity: 1 },
        },
        blob: {
          "0%": { "border-radius": "24% 76% 35% 65% / 27% 36% 64% 73%" },
          "25%": { "border-radius": "76% 24% 33% 67% / 68% 55% 45% 32%" },
          "100%": { "border-radius": "24% 76% 35% 65% / 27% 36% 64% 73%" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.12)" },
          "66%": { transform: "translate(-30px, 25px) scale(0.95)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "gradient-pan": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        shimmer: {
          "0%": { "background-position": "-200% 0" },
          "100%": { "background-position": "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        eq: {
          "0%, 100%": { transform: "scaleY(0.35)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        slideInUp: "slideInUp 0.5s ease-in-out",
        fadeInRight: "fadeInRight 0.5s ease-in-out",
        fadeIn: "fadeIn 0.6s ease-in-out forwards",
        zoomIn: "zoomIn 0.5s ease-in-out",
        scaleFromZero: "scaleFromZero 0.5s cubic-bezier(0.22,1,0.36,1) forwards",
        showTop: "showTop 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
        showBottom: "showBottom 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
        showTopFadeIn: "showTopFadeIn 0.6s ease-out forwards",
        splashScreenHamoc: "splashScreenHamoc 0.8s ease-in forwards",
        rotateAndFadeIn: "rotateAndFadeIn 0.5s ease-in-out",
        blob: "blob 12s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        aurora: "aurora 18s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        "gradient-pan": "gradient-pan 6s ease infinite",
        shimmer: "shimmer 2.5s linear infinite",
        marquee: "marquee 30s linear infinite",
        eq: "eq 0.9s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
