var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var process = require("process");
var node_env = process.env.NODE_ENV

const extractCSS = new ExtractTextPlugin({ filename: "[hash:8].[name].css", disable: false, allChunks: true });

module.exports = {
  entry: {
    src: [
      "./src"
    ]
  },
  output: {
    path: path.resolve("build"),
    publicPath: "/",
    filename: "[hash:8].[name].js"
  },
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ],
    extensions: [".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: "body"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(node_env)
      }
    }),
    extractCSS
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /\.scss$/,
        use: extractCSS.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })
      },
      {
        test: /\.(png|jpg|gif)$/, use: "file-loader"
      },

      //for bootstrap
      // {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader?mimetype=application/font-woff'},
      // {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader?mimetype=application/octet-stream'},
      // {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader'},
      // {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader?mimetype=image/svg+xml'}
    ]
  }
};