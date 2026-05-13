import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative asset URLs so CSS/JS load on GitHub Pages, nested paths, and static hosts
// where absolute "/assets/..." would 404.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
