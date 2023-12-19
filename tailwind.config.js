/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Merriweather: ["Merriweather", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        Stratos: "#000638",
        Willow: "#605c59",
        Rhino: "#283a61",
        Scorpion: "#5F5F5f",
        Castle: "#F5F5F5",
        Emperor: "#515151",
        Tundora: "#434343",
        Zumthor: "#dfe6ff",
        Armadillo: "#544b44",
        Mine: "#3e3e3e",
        Shaft: "#303030",
        Black_oak: "#4f4f4f",
        Steam: "#ddd",
        Heaven: "#fefefe",
      },
      fontSize: {
        xs: "14px",
        sm: "16px",
        base: "18px",
        lg: "20px",
        xl: "24px",
        "2xl": "26px",
        "3xl": "36px",
        "4xl": "46px",
        "5xl": "48px",
      },
    },
  },
  plugins: [],
};
