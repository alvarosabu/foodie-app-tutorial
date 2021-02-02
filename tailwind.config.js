const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.rose,
        secondary: colors.lime,
      },
    },
    fontFamily: {
      display: ['GilroyExtraBold'],
      body: ['Open Sans'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
