/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#343a40",
        secondary: {
          DEFAULT: "#e01e37",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
          400: "#3c3c3c",
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        rthin: ["Roboto-Thin", "sans-serif"],
        rthinitalic: ["Roboto-ThinItalic", "sans-serif"],
        rlight: ["Roboto-Light", "sans-serif"],
        rlightitalic: ["Roboto-LightItalic", "sans-serif"],
        rregular: ["Roboto-Regular", "sans-serif"],
        ritalic: ["Roboto-Italic", "sans-serif"],
        rmedium: ["Roboto-Medium", "sans-serif"],
        rmediumitalic: ["Roboto-MediumItalic", "sans-serif"],
        rbold: ["Roboto-Bold", "sans-serif"],
        rbolditalic: ["Roboto-BoldItalic", "sans-serif"],
        rblack: ["Roboto-Black", "sans-serif"],
        rblackitalic: ["Roboto-BlackItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
