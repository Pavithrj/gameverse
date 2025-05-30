import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// htt
export default defineConfig({
    plugins: [react()],
    base: "/gameverse"
});