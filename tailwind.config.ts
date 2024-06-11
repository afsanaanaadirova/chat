/** @type {import('tailwindcss').Config} */
import { colors } from './src/app/lib/twcolor.config';
import { fontSize } from './src/app/lib/twfontSize.config';
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['inter']
    },
    extend: {
      colors,
      // darkBlue: "#081A3E",
      // dark: "#121212",
      // lightBlack: "#222222",
      // softBlack: "#303030",
      // aqua: "#39CEF3",
      // light: "#F0F2F5",
      // green: "#64BD79",
      // lightGreen: "#C2EFCD",
      // softGreen: "#E6FFDA",
      // lightRed: "#FFB1BB",
      // red: "#F81734",
      // blue: "#3A70DD",
      // lightBlue: "#E3ECFF",
      // darkSnow: "#C7CCD0",
      // gray: "#7B809A",
      // cream: "#E7E7E7",
      fontSize,
      animation: {
        toast: "appear 0.3s forwards, disappear 0.3s 2.5s forwards",
        ripple: "ripple 0.6s linear forwards",
      },
      keyframes: {
        appear: {
          "0%": {
            maxHeight: "0",
            opacity: "0",
            right: "-100%",
          },
          "100%": {
            maxHeight: "160px",
            opacity: "1",
            right: "20px",
          },
        },
        disappear: {
          "0%": {
            maxHeight: "160px",
            opacity: "1",
            right: "20px",
          },
          "100%": {
            maxHeight: "0",
            opacity: "0",
            right: "-100%",
          },
        },
        ripple: {
          "0%": {
            transform: "translate(-50%, -50%) scale(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translate(-50%, -50%) scale(2)",
            opacity: "0",
          },
        },
      },
    },
    container: {
      padding: '24px',
      center: true,
    },
  },
  plugins: [],
}
