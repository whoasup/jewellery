const path = require("path");

module.exports = {
  mode: `development`,
  entry: [
    `./source/js/test.js`,
    `./source/js/menu.js`,
    `./source/js/slider.js`,
    `./source/js/accordion.js`,
  ],
  output: {
    filename: `main.js`,
    path: path.resolve(__dirname, `build/js`),
    iife: false,
  },
  devtool: false,
};
