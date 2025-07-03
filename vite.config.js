import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    open: true,
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // important for Windows sometimes
    },
  },
})




// export default defineConfig({
//   plugins: [react()],
//   logLevel: 'info',
//   server: {
//     open: true,
//   }
// })
