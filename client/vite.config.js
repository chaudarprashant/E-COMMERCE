import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()], // Ensure React plugin is included
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // Backend server URL
        changeOrigin: true,
        secure: false, // Set to false if using HTTP (not HTTPS)
      },
    },
  },
});