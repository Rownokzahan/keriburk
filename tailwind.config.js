/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      animation: {
        "infinite-slider-left": "infiniteSliderLeft 12s linear infinite",
        "infinite-slider-right": "infiniteSliderRight 12s linear infinite",
      },

      keyframes: {
        infiniteSliderLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-80px * 7))" },
        },
        infiniteSliderRight: {
          "0%": { transform: "translateX(calc(-80px * 7))" },
          "100%": { transform: "translateX(0)" },
        },
      },

      colors: {
        ui: {
          green: { DEFAULT: "#084327" },
          red: { DEFAULT: "#E31E26" },
          white: { DEFAULT: "#FAF9F6" },
          black: { "light": "#909090", DEFAULT: "#0A0A0A" },
        },
      },
    },
  },
};
