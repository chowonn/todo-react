/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'gradient-from': '#7F7FD5',
        'gradient-via': '#86A8E7',
        'gradient-to': '#91EAE4',
      },
    },
  },
  plugins: [],
};
