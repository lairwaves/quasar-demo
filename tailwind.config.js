/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import Theme from './theme'
console.log(process.env.V_THEME)
const t = Theme[process.env.V_THEME]
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...t
      }
    }
  },
  plugins: []
}
