const path = require("path");

const PATHS = {
  app: path.resolve(__dirname, "../src"),
  build: path.resolve(__dirname, "../build"),
  nodeModules: path.resolve(__dirname, "../node_modules"),
  tailwind: path.resolve(__dirname, "../tailwind.js")
};

module.exports = PATHS;
