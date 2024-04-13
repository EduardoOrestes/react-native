import { colors } from "./src/styles/colors"
import { fontFamily } from "./src/styles/fontFamily"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // colors: colors - como o nome vai ser o mesmo, pode colocar só o nome
      colors,
      fontFamily
    },
  },
  plugins: [],
}
