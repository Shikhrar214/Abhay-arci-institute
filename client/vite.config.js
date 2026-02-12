import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://abhay-arci-institute.onrender.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  },
  plugins: [react(), tailwindcss(),],
})
