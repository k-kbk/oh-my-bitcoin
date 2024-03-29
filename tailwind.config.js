/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
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
        myGrayText: '#6B7684',
        myBlue: '#1363DF',
      },
    },
  },
};
