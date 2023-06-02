/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  safelist: [
    {
      pattern: /bg-green-400\/(25|30|40|50|60|70|75|80|90|95|100)/
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
