import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  root: "src",
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
  plugins: [react()],
})
