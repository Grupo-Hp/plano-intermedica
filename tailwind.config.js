/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff9500',
        secondary: '#555557',
        apoio: '#ca8414'
      },
      fontSize: {
        super: '12rem'
      },
    }
  },
  plugins: [],
}