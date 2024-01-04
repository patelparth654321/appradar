const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['"Chivo", sans-serif'],
      sans: ['"Mulish", sans-serif'],
    },
    extend: {
      colors: {
        gray: colors.slate,
        primary: colors.blue,
        brand: colors.violet,
      },
      zIndex: {
        5: "5",
        4: "4",
        3: "3",
        2: "2",
        1: "1",
      },
    },
  },
  plugins: [],
};
