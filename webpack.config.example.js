const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'example'),
  devtool: 'sourcemap',
  entry: {
    js: ['babel-polyfill', './index.jsx'],
    vendor: ['react', 'react-router', 'react-dom', 'react-addons-css-transition-group', 'react-syntax-highlighter'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/example'),
    filename: "[hash].bundle.js",
    chunkFilename: "[id].[hash].bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['latest', 'stage-0', 'react'],
        },
      }, {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass',
      }, {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('style', 'css', 'postcss'),
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192',
      },
    ],
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', '[hash].vendor.bundle.js'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'example/index.html'),
      favicon: path.join(__dirname, 'example/favicon.ico'),
    }),
  ],
  resolve: {
    extensions: ['', '.jsx', '.js', '.json'],
  },
};
