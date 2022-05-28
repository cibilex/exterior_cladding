import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: true,
  theme: {
    extend: {
      fontFamily: {
        head: "'Staatliches', cursive",
        body: "'Bree Serif', serif"
      }
    }
  },
  safelist: 'p-1 p-2 p-3 p-4',
  plugins: [
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000
      }
    })
  ]
})
