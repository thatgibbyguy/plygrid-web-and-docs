import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import path from "path";
import { existsSync } from "fs";

// Use local framework source in dev, fall back to node_modules on deploy
const localPly = path.resolve(import.meta.dirname, "..");
const useLocalPly = existsSync(path.join(localPly, "src/scss/_ply.scss"));

export default defineConfig({
  site: "https://plycss.com",
  integrations: [react(), sitemap()],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        ...(useLocalPly && { 'ply-css': localPly }),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          ...(useLocalPly && {
            importers: [
              {
                findFileUrl(url) {
                  if (url.startsWith("ply-css/")) {
                    const resolved = path.join(
                      localPly,
                      url.slice("ply-css/".length),
                    );
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
  },
});
