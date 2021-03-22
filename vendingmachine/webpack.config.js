const path = require("path");

module.exports = {
  mode: "development",
  entry: "./public/src/app.js",
  output: {
    path: path.resolve(__dirname + "/public", "dist"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
