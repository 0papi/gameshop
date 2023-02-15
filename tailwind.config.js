/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary-dark": "#020202",
        "primary-white": "#FFFFFF",
      },
      colors: {
        "primary-dark": "#020202",
        "primary-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
