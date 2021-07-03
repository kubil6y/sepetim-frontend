const defaultTheme = require('tailwindcss/defaultTheme');

const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = [
  'Open Sans', // <-- Open sans is a default sans font now
  'sans-serif',
  'system-ui',
  // <-- you may provide more font fallbacks here
];
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily,
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['disabled', 'group-hover'],
    },
  },
  plugins: [],
};
