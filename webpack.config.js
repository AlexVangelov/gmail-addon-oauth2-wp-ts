/*
 * @Author: Alex Vangelov &lt;email@data.bg&gt; 
 * @Date: 2017-11-25 12:52:16 
 * @Last Modified by:   AlexV 
 * @Last Modified time: 2017-11-25 12:52:16 
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GasPlugin = require("gas-webpack-plugin");
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'Code.gs',
    path: __dirname + '/build'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' }
    ]
  },
  plugins: [
    new GasPlugin(),
    new HtmlWebpackPlugin({
      filename: 'appsscript.json',
      template: './src/appsscript.json.ejs',
      chunks: [],
      addon: {
        name: 'Hello Gmail Add-on'
      }
    })
  ]
}