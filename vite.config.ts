import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/greatfrontend-button-component/",
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
