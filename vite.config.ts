import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // ✅ This fixes broken paths on Netlify
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
