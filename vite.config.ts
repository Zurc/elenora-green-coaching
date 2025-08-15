import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/elenora-green-coaching/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
