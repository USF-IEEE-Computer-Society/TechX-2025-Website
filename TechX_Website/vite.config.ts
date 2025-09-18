import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss()
  ],
   base: '/TechX-Website/',
    build: {
      outDir: 'docs',
      emptyOutDir: false
    }
})
