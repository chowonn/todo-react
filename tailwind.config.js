/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'gradient-to': '#91EAE4',
        'gradient-via': '#86A8E7',
        'gradient-from': '#7F7FD5',
        red: '#FF3333',
      },
    },
  },
  plugins: [],
};
