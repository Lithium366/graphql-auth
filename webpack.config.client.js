const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  mode: process.env.NODE_ENV || 'development',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    filename: 'index.js',
    publicPath: '/public'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.m?js$/,
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  stats: true,
};
