const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require("webpack")

module.exports = {
  entry: path.join(__dirname, "../src/index.js"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "js/bundle.[hash].js"
  },
  devServer: {
    host: "localhost",
    port: 3000,
    contentBase: path.join(__dirname, "../dist"),
    historyApiFallback: true,
    inline: true,
    open: true,
    hot: true,
    overlay: {
      error: true
    }
  },
  devtool: "eval-source-map",
  resolve: {
    alias: {
      component: path.join(__dirname, "../src/component"),
      page: path.join(__dirname, "../src/page"),
      css: path.join(__dirname, "../src/css"),
      action: path.join(__dirname, "../src/redux/action"),
      reducer: path.join(__dirname, "../src/redux/reducer"),
      assets: path.join(__dirname, "../src/assets")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        include: path.join(__dirname, "../src")
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[name]--[local]__[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [
                  require("autoprefixer")
                ]
              }
            }
          ]
        }),
        include: path.join(__dirname, "../src")
      },
      {
        test: /\.(jpg|png)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "resource/[name].[ext]"
        },
        include: path.join(__dirname, "../src")
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/index.html"),
      favicon: path.join(__dirname, "../src/assets/favicon.ico"),
      filename: "index.html"
    }),
    new ExtractTextPlugin({
      filename: "css/[name].css"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
