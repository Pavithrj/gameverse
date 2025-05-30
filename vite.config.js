import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vi
export default defineConfig({
    plugins: [react()],
    base: "/gameverse"
});