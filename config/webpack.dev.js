const path = require("path");
const loader = require("./addons/loaders");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",

  module: {
    rules: [
      loader.StyleLoader
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].[hash].css`,
    }),
    new Dotenv({
      path: path.resolve(__dirname, "./addons/.env.development"),
    }),
  ],

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash].js",
  },

  devtool: "eval-source-map",
};
