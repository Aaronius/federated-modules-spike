const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: {
    app2: "./src/App",
    woof: "./src/woof",
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3002,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: {
    publicPath: "auto",
    libraryTarget: "module",
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        reactVendor: {
          test: /react/,
          name: "vendor-react",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: "ayx_app2",
    //   filename: "remoteEntry.js",
    //   exposes: {
    //     "./App": "./src/App",
    //     "./getRoutes": "./src/routes",
    //   },
    //   shared: [
    //     {
    //       react: { singleton: true },
    //       "react-dom": { singleton: true },
    //       moment: { singleton: true },
    //       "react-router": { singleton: true },
    //       "react-router-dom": { singleton: true },
    //     },
    //   ],
    // }),
    // new HtmlWebpackPlugin({
    //   template: "./public/index.html",
    // }),
  ],
};
