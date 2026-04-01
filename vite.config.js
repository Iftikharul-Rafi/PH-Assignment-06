import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // 🔥 VERY IMPORTANT (GitHub Pages fix)
  base: "/PH-Assignment-06/",
});