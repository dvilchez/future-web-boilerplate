var webpack = require('webpack');

module.exports = {
  entry: [
    __dirname + '/app/client/entry'
  ],
  output: {
      path: __dirname + '/app/public',
      filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: __dirname+'/node_modules', loader: 'babel-loader' },
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  resolve: { fallback: __dirname + "/lib" },
  resolveLoader: { fallback: __dirname + "/lib" },
  debug: true
};
