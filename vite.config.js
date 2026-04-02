import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Recharts + Vite: pre-bundled deps can resolve a second React copy, causing
  // "Invalid hook call" / useContext on null inside ResponsiveContainer.
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})