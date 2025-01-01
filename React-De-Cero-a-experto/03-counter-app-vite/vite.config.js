import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Permite acceder desde cualquier dispositivo en la red
    port: 3000        // O el puerto que estés usando
  }
});