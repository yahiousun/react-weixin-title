const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: [ 'Chrome' ],
    files: [
      'test/index.js',
      { pattern: 'example/favicon.ico', watched: false, included: false, served: true, nocache: false }
    ],
    preprocessors: {
      'test/index.js': [ 'webpack', 'sourcemap' ]
    },
    port: 9876,
    captureTimeout: 60000,
    frameworks: [ 'mocha', 'chai' ],
    client: {
      mocha: {}
    },
    singleRun: true,
    reporters: [ 'mocha', 'coverage' ],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html' },
        { type: 'text' }
      ]
    },
    webpack: {
      babel: {
        presets: ['latest', 'stage-0', 'react']
      },
      isparta: {
        embedSource: true,
        noAutoWrap: true,
        babel: {
          presets: ['latest', 'stage-0', 'react']
        }
      },
      module: {
        preLoaders: [
          {
            test: /\.(js|jsx)$/,
            loader: 'isparta-loader',
            include: [
              path.join(__dirname, 'src')
            ]
          }
        ],
        loaders:[
          {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            include: [
              path.join(__dirname, 'src'),
              path.join(__dirname, 'test')
            ]
          }, {
            test: /\.scss$/,
            loader: 'style!css!postcss!sass'
          }, {
            test: /\.css/,
            loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
          }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          }
        ]
      },
      externals: {
        'cheerio': 'window',
        'react/addons': true, // important!!
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      resolve: {
        extensions: ['', '.jsx', '.js', '.json']
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
