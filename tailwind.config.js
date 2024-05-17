/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'verde-oscuro':'#0f7d7e',
        'verde-claro':'#76b5a0',
        'piel':'#fffdd1',
        'rojo-oscuro':'#d33649',
        'rojo-claro':'#ff7575',
        'marron':'#2c1507'
      },
      fontFamily:{
        'onest': ["Onest", "sans-serif"]
      }
    },
  },
  plugins: [],
}

