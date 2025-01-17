/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Archivos de React
  theme: {
    extend: {
      colors: {
        "mindaro": '#CCE486ff',
        "burntUmber": '#89342Dff',
        "asparagus": '#76A45Eff',
        'persianOrange': '#D79364ff',
        'lightGreen': '#ADE38Bff',
      },
    },
  },
  plugins: [],
};
