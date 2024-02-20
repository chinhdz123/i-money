/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#363853',
        primary: '#0012FF',
        green: '#6704CA',
        red: '#F28080'
      },
      backgroundColor: {
        'dark-light': '#f8fafb' // Thêm bg-dark-light với giá trị là màu "dark-light"
      }
    }
  },
  plugins: []
}
