/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm": "640px",

        "md": "868px",

        "lg": "1004px",

        "xl": "1094px",

        "2xl": "1536px",
      },
      colors: {
        'custom-dark': 'rgb(52, 55, 34)', // Adding the custom color
      },
    },
  },
  plugins: [],
}

