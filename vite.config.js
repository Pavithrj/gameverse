import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// h
export default defineConfig({
    plugins: [react()],
    base: "/gameverse"
});