const path = require("path");
const loaders = require("./addons/loaders");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const _ESLintPlugin = require("eslint-webpack-plugin");

const APP_DIR = path.resolve(__dirname, "../src");
const PUB_DIR = path.resolve(__dirname, "../public");

const ESLintPlugin = new _ESLintPlugin({
  overrideConfigFile: path.resolve(__dirname, "../.eslintrc.json"),
  context: path.resolve(__dirname, "../src/"),
  files: "**/*.tsx",
});

module.exports = {
  entry: ['@babel/polyfill',APP_DIR ],
  mode: "development",
  module: {
    rules: [
      loaders.TSLoader,
      loaders.CSSLoader,
      loaders.SVGLoader,
      loaders.FileLoader,
      loaders.SCSSLoader,
    ],
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 7060,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json", ".css"],
    alias: {
      '@': APP_DIR,
      'public': PUB_DIR,
      
    },
  },
  plugins: [
    ESLintPlugin,
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "FREEDOM FINANCE Credit",
      template: path.resolve(__dirname, "../src/index.html"),
    }),
  ],
};
