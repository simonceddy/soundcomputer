const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  // safelist: [
  //   {
  //     pattern: /bg-green-400\/(25|30|40|50|60|70|75|80|90|95|100)/
  //   }
  // ],
  theme: {
    extend: {

      fontFamily: {
        sans: [
          'Quicksand',
          ...defaultTheme.fontFamily.sans,
        ],
        digi: [
          'VT323',
          ...defaultTheme.fontFamily.mono,
        ],
        calc: [
          'Segment7',
          ...defaultTheme.fontFamily.mono,
        ]
      },
      fontSize: {
        xxs: ['0.5rem', { lineHeight: '0.7rem' }],
        '3xs': ['0.4rem', { lineHeight: '0.6rem' }],
      }
    },
  },
  plugins: [],
};
