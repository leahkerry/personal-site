const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
        fontFamily: {
            custom: ['"PressStart2P"', 'sans-serif'],
        },
        colors: {
            primary: '#afb8d6ff',
            secondary: '#c6d2deff', 
            bgcolor: '#d9e2edff',
            accent: '#e2f3f2ff',
            txtcolor: '#3a3757ff',
      },
    },
  },
  plugins: [],
}
