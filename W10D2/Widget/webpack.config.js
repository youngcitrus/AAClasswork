const path = require('path');

module.exports = {
  entry: "./frontend/entry.jsx",
  output:{ 
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  devtool: 'source-map',
  // sets up babel to transpile ES6/React code to ES5, browser-compatible code
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  // allows us to drop .js or .jsx when importing files
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};