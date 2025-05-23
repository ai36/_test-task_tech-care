import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@src": "/src",
            "@assets": "/src/assets",
            "@components": "/src/components",
            "@pages": "/src/pages",
            "@layouts": "/src/layouts",
            "@img": "/public/img",
        },
    },
})
