/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "way-green": "#00af50",
        "way-yellow": "#ffff00",
        "way-red": "#ff0000",
        "wg-bg": "#333240",
        "tx-gray": "#bababe"
      },
      backgroundImage: {
        bg1: "url('/src/images/bg1.png')",
        bg2: "url('/src/images/bg2.png')"
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '200': '200px',
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [],
}