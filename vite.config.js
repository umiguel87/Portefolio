import path from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
// Para GitHub Pages: o site fica em https://<user>.github.io/<repo>/
// Se o teu repositório tiver outro nome, muda 'Portefolio' abaixo.
const base = process.env.NODE_ENV === 'production' ? '/Portefolio/' : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
