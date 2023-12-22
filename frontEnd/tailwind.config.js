/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#B28AF8",
        secondary: "#C19EFF",
        button: "#FFFFFF",
        buttonHover: "",
        primaryDark: "#2B0075",
        buttonDark: "#F069FF",
        buttonDarkHover: "#B315C5",
      },
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaDemiBold: "Dana DemiBold",
        Morabba: "Morabba",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
      },
      animation: {
        shadowLamp: "shadowLamp 2s ease 3s forwards",
      },
      keyframes: {
        shadowLamp: {
          "0%": {
            boxShadow: "0 0px 0px transparent",
          },
          "50%": {
            boxShadow: "0 1px 1px #ddd6fe7a",
          },
          "100%": {
            boxShadow: "0 3px 3px #fff",
          },
        },
      },
      transitionDelay: {
        2000: {
          transitionDelay: "2000ms",
        },
      },
      transitionDuration:{
        2000: {
          transitionDuration: "2000ms",
        },
        3000: {
          transitionDuration: "3000ms",
        },
      },
      outlineWidth : {
        3 : '3px'
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
