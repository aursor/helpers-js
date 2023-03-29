import { defineConfig } from "vite";
import path from "path";
import babel from "vite-plugin-babel";
export default defineConfig({
  build: {
    outDir: "./lib",
    lib: {
      entry: path.join(__dirname, "./core", "index.ts"),
      name: "HelpersScript",
      formats: ["es", "cjs", "umd"],
    },
    minify: "terser",
  },
  plugins: [babel()],
});
