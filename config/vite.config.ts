import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import paths from "vite-tsconfig-paths"
import { join } from "path"

export default defineConfig({
  root: join(__dirname, "../client"),
  envDir: ".",
  envPrefix: "KWOT_",
  publicDir: "public",
  clearScreen: false,
  logLevel: "info",
  server: {
    port: 3000,
    strictPort: true,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    outDir: "../.dist/client",
    emptyOutDir: true,
    sourcemap: true,
    manifest: true,
  },
  plugins: [react(), paths({ root: "../" })],
})
