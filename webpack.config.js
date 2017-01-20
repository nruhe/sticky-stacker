var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProvidePlugin = require('webpack').ProvidePlugin;

var demo = {
  entry: [
    'babel-polyfill',
    'normalize-css',
    __dirname + '/demo/index.js'
  ],
  output: {
    filename: 'demo.js',
    path: __dirname + '/build'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        exclude: /node_modules/,
        loader : 'babel'
      }
    ]
  },
  resolve: {
    alias: {
      'sticky-stacker': __dirname + '/src/index.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Demos',
      filename: 'index.html'
    }),
    new ProvidePlugin({
      'React': 'react',
    })
  ],
  devServer: {
    contentBase: './build',
    colors: true,
    watch: true,
    historyApiFallback: {
      index: './index.html'
    },
    inline: true
  }
};

module.exports = demo;
