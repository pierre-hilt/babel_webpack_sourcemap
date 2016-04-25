var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: './build/index',
  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "source-map-loader"
      }
      ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}