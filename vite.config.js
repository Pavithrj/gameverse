import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.
export default defineConfig({
    plugins: [react()],
    base: "/gameverse"
});