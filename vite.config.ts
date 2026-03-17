import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { existsSync } from "fs";

// Use local framework source in dev, fall back to node_modules on deploy
const localPly = path.resolve(import.meta.dirname, "..");
const useLocalPly = existsSync(path.join(localPly, "src/scss/_ply.scss"));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      ...(useLocalPly && { plygrid: localPly }),
    },
    dedupe: ["react", "react-dom"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        ...(useLocalPly && {
          importers: [
            {
              findFileUrl(url: string) {
                if (url.startsWith("plygrid/")) {
                  const resolved = path.join(localPly, url.slice("plygrid/".length));
                  return new URL(`file://${resolved}`);
                }
                return null;
              },
            },
          ],
        }),
      },
    },
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    host: "0.0.0.0",
  },
});
