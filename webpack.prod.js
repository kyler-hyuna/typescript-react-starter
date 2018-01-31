const webpack = require('webpack')
const merge = require('webpack-merge')

// Tree-shake unused code and minify
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

// Extract sass into own stylesheet so that we don't need to wait on js loaded
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new ExtractTextPlugin('styles.css'),
  ],
})
