/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      fontFamily: {
        'sans' : ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
