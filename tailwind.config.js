/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jost: ["Jost"],
        Cormorant: ["Cormorant"],
      },
    },
  },
  plugins: [require("daisyui")],
};
