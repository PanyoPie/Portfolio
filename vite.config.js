import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set the /<baseUrl>/ pathname under which your site is served.
// For GitHub Pages deployment, it is often '/<projectName>/'.
const baseUrl = '/'

export default defineConfig({
  base: baseUrl,
  plugins: [react()],
})