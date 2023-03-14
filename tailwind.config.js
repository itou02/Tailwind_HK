/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  //主要畫面副檔名
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.yellow,
        'white': "#F6F6F6",
        'blue': "#2FBBE9",
        'darkblue': "#017EA0",
        'purple': "#924FFD",
        'darkpurple': "#7D3BE7",
        'red': "#F05F5F",
        'pink': "#ff49db",
        'orange': "#FFC497",
        'darkorange': "#E68032",
        'green': "#B7F9CA",
        'yellowgreen': "#A2C688",
        'yellow': "#ffc82c",
        "gray-dark": "#273444",
        'gray': "#8492a6",
        "gray-light": "#d3dce6",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
}
