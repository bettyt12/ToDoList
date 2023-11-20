/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      strokeWidth: {
      '2': '2.5',
    }},
  },
  plugins: [],
}

