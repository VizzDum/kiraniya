import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/kiraniya/'  // дуже важливо: збігається з назвою репо!
})