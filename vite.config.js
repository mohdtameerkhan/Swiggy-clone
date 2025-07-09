import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    open: true,
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, 
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
