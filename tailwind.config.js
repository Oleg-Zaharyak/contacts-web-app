/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "light-gray": "rgba(170, 170, 170, 1)",
        "regular-gray": "rgba(70, 70, 70,1)",
      },
    },
  },
  plugins: [],
};
