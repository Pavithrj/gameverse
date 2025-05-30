import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vit
export default defineConfig({
    plugins: [react()],
    base: "/gameverse"
});