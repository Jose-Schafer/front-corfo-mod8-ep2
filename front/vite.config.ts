import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    headers: {
      "X-FRAME-OPTIONS": "DENY",
    },
  },
  test: {
    globals: true,
    environment: "node", // or 'jsdom' if testing browser-based code
    includeSource: ["src/**/*.{ts,tsx}"],
  },
});
