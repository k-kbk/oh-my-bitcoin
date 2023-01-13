/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        18: '4.5rem',
        30: '7.5rem',
        88: '22rem',
        104: '26rem',
        112: '28rem',
        128: '32rem',
      },
      colors: {
        myGray: '#4E5968',
      },
    },
  },
  plugins: [],
};
