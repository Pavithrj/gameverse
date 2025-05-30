import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ht
export default defineConfig({
    plugins: [react()],
    base: "/gameverse"
});