import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "public",
  build: {
    outDir: "dist",
    sourcemap: true,
    lib: {
      entry: "src/main.tsx",
      fileName: "main",
      name: "MyLibrary",
    },
  },
  base: "/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
