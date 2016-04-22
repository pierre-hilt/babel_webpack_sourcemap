var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: './client/index',
  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    preLoaders: [],
    loaders: [
      /*{
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /(node_modules|target)/,
        include: __dirname,
      },*/
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}
