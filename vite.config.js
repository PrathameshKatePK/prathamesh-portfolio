import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    https: false, // Local dev over HTTP (browser warning depends on how you open/deploy)
    open: true, // Optional: Auto-open browser
  },
})


