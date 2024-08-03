/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "wood-charcoal": "rgba(70, 70, 70,1)",
        "quick-silver": "rgba(166, 166, 166, 1)",
        "ultimate-grey": "rgba(170, 170, 170, 1)",
        "nimbus-cloud": "rgba(200, 200, 200,1)",
        "super-silver": "rgba(237,237,237,1)",
      },
    },
  },
  plugins: [],
};
