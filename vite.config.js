import { defineConfig } from "vite";
import path from "path";
import babel from "vite-plugin-babel";
import dts from "vite-plugin-dts";
// import fs from "fs";

export default defineConfig({
  build: {
    outDir: "./lib",
    lib: {
      entry: path.join(__dirname, "./core", "index.ts"),
      name: "HelpersScript",
      formats: ["es", "cjs", "umd"],
    },
    minify: "esbuild",
    // minify: "terser",
  },
  plugins: [
    babel(),
    dts({
      outputDir: "./types",
    }),
  ],
});
