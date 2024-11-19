/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Match all HTML files in the root directory
    "./*.js", // Match all JavaScript files in the root directory (if applicable)
    "./css/**/*.css", // Match all CSS files in the css directory (if applicable)
    // Add other specific directories or file patterns as needed
  ],
  safelist: ["border-ui-black", "text-left"],
  plugins: [],
  theme: {
    extend: {
      animation: {
        fadeInDown: "fadeInDown 700ms ease-in-out 1",
        "infinite-slider-left": "infiniteSliderLeft 12s linear infinite",
        "infinite-slider-right": "infiniteSliderRight 12s linear infinite",
        "spin-slow": "spin-slow 60s linear infinite",
      },
      keyframes: {
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        infiniteSliderLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-80px * 7))" },
        },
        infiniteSliderRight: {
          "0%": { transform: "translateX(calc(-80px * 7))" },
          "100%": { transform: "translateX(0)" },
        },
        "spin-slow": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      colors: {
        ui: {
          green: {
            light: "#5CBA47",
            DEFAULT: "#084327",
          },
          yellow: {
            DEFAULT: "#FCB017",
          },
          red: {
            DEFAULT: "#E31E26",
          },
          white: {
            DEFAULT: "#FAF9F6",
          },
          gray: {
            DEFAULT: "#909090",
          },
          black: {
            DEFAULT: "#0A0A0A",
          },
        },
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
        border: "border",
      },
    },
  },
};
