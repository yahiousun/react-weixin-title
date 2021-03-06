const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'example'),
  devtool: 'eval-source-map',
  entry: {
    js: ['./index.jsx'],
    vendor: ['react', 'react-router', 'react-dom', 'react-addons-css-transition-group', 'react-syntax-highlighter'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/example'),
    filename: './bundle.js',
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
        test: /\.(png|jpe?g)$/,
        loader: 'url?limit=25000',
      },
    ],
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: process.env.NODE_ENV !== 'production',
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'example/index.html'),
      favicon: path.join(__dirname, 'example/favicon.ico'),
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
  ],
  resolve: {
    extensions: ['', '.jsx', '.js'],
  },
};
