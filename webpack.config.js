const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlRules = {
  test: /\.html$/,
  exclude: /node_modules/,
  use: {
    loader: "html-loader",
  },
};
const cssRules = {
  test: /\.css$/i,
  exclude: /node_modules/,
  use: ["style-loader", "css-loader", "postcss-loader"],
};
const javascriptRules = {
  test: /\.(js|jsx)?$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
};
const assetsRules = {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
}

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [htmlRules, cssRules, javascriptRules,assetsRules],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Genius App",
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
  },
};
