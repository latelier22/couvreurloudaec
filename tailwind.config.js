// TW Elements is free under AGPL, with a commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",

    // // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      keyframes: () => ({
        bounceAndStabilize: {
          '0%': { transform: 'translateY(-600px)' },
          '20%, 50%, 80%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-300px)' },
          '60%': { transform: 'translateY(-150px)' },
          '100%': { transform: 'translateY(0)' },
        },
        rotateAccelerate: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(1800deg)" }, // 5 tours à 360 degrés chacun
          "100%": { transform: "rotate(0deg)" },
        },
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1},
        },
        slideTop: {
          "0%": { opacity: 0, marginTop: "-600px" },
          "100%": { opacity: 1, marginTop: "0" },
        },
        slideBottom: {
          "0%": { opacity: 0, marginBottom: "-600px" },
          "100%": { opacity: 1, marginBottom: "0" },
        },
        slideRight: {
          "0%": { opacity: 0, marginLeft: "-600px" },
          "100%": { opacity: 1, marginLeft: "0" },
        },
        slideLeft: {
          "0%": { opacity: 0, marginRight: "-600px" },
          "100%": { opacity: 1, marginRight: "0" },
        },
      }),
      animation: {
        bounceAndStabilize: 'bounceAndStabilize 3s ease-in-out',
        appear : "appear 1s ease-in",
        slideTop: "slideTop 1s ease-in",
        slideTop0: "slideTop 0.3s ease-in",
        slideBottom: "slideBottom 1s ease-in",
        slideRight: "slideRight 1s ease-in",
        slideLeft: "slideLeft 1s ease-in",
      },
      fontFamily: {
        sans: ["Rancho"],
      },
    },
  },


  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
