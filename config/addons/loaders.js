const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const JSLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: ["babel-loader"],
};

const TSLoader = {
  test: /\.(ts|tsx)$/,
  use: "ts-loader",
  exclude: /node_modules/,
};

const SCSSLoader = {
  test: /\.(scss)$/,
  use: ["style-loader", "css-loader", "sass-loader"],
};

const CSSLoader = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

const FileLoader = {
  test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf|ico|webmanifest)$/i,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "dirname/[contenthash].[ext]",
      },
    },
  ],
};

const SVGLoader = {
  test: /\.svg$/,
  loader: "svg-inline-loader",
};

const StyleLoader = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },

    {
      loader: "css-loader",
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          config: path.resolve(__dirname, "./postcss.js"),
        },
      },
    },

    {
      loader: "sass-loader",
      options: {
        implementation: require("sass"),
      },
    },
  ],
};

module.exports = {
  TSLoader: TSLoader,
  JSLoader: JSLoader,
  SVGLoader: SVGLoader,
  CSSLoader: CSSLoader,
  SCSSLoader: SCSSLoader,
  FileLoader: FileLoader,
  StyleLoader: StyleLoader,
};
