// vite.config.js
const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        exampleOne: resolve(__dirname, "src/example-one.html"),
        exampleTwo: resolve(__dirname, "src/example-two.html"),
        exampleThree: resolve(__dirname, "src/example-three.html"),
      },
    },
  },
});
