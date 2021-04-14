const path = require("path");

module.exports = {
  mode: `development`,
  entry: [`./source/js/test.js`],
  output: {
    filename: `main.js`,
    path: path.resolve(__dirname, `build/js`),
    iife: false,
  },
  devtool: false,
};
