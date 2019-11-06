const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server/server.js',
  mode: process.env.NODE_ENV || 'production',
  target: 'node',
  node: {
    __dirname: false,
  },
  output: {
    path: path.resolve(__dirname, 'dist/server'),
    filename: 'server.js'
  },
  externals: [ nodeExternals() ],
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.m?js$/,
        exclude: /node_modules/,
      }
    ]
  },
  stats: true,
};
