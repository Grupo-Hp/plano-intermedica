/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#15578e',
        secondary: '#0d9fe3',
        redAssim: '#bb3333'
      },
      fontSize: {
        super: '12rem'
      },
    }
  },
  plugins: [],
}