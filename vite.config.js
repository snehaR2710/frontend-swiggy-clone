import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://www.swiggy.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          'Referer': 'https://www.swiggy.com/',
          'Origin': 'https://www.swiggy.com',
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
})