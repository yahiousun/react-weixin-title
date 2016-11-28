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
    js: ['./index.jsx'],
    vendor: ['react', 'react-router', 'react-dom', 'react-syntax-highlighter'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/example'),
    filename: "bundle.[chunkhash].js",
    chunkFilename: "[id].bundle.[chunkhash].js",
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader'),
      }, {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=10000!img?progressive=true'
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
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash].js'),
    new ExtractTextPlugin('app.[contenthash].css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'example/index.html'),
      favicon: path.join(__dirname, 'example/favicon.ico'),
    }),
  ],
  resolve: {
    extensions: ['', '.jsx', '.js'],
  },
};
