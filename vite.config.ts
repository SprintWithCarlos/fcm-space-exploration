import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";
import VitePluginReactRemoveAttributes from "vite-plugin-react-remove-attributes";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        icon: true
      }
    }),
    react(),
    VitePluginReactRemoveAttributes({
      attributes: ["data-testid"]
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  }
});
