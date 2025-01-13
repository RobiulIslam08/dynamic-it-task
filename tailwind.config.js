/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontRoboto: ["Roboto", "system-ui"],

        fontRobotoSlab: ["Roboto Slab", "system-ui"],
      },
    },
  },
  plugins: [],
};
