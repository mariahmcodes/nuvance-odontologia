import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("react") || id.includes("react-dom")) {
            return "react-vendor";
          }

          if (id.includes("react-router")) {
            return "router";
          }

          if (id.includes("@tanstack")) {
            return "query";
          }

          if (id.includes("@radix-ui")) {
            return "ui-radix";
          }

          if (id.includes("framer-motion")) {
            return "motion";
          }

          if (id.includes("embla-carousel")) {
            return "carousel";
          }

          if (id.includes("lucide-react")) {
            return "icons";
          }

          if (id.includes("recharts")) {
            return "charts";
          }
        },
      },
    },
  },
});