var path = require('path')

import htmlWebpackPlugin from 'html-webpack-plugin'
import cleanWebpackPlugin from 'clean-webpack-plugin'

export default {
  entry: './src/main.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.html?$/,
        use: 'html-loader',
      },
      {
        test: /.ejs?$/,
        use: 'ejs-loader',
      },
    ],
  },
  devServer: {
    contentBase: './lib',
    hot: true,
    port: 3000,
    open: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'ts插件库测试',
      template: './example/index.ejs',
    }),
    new cleanWebpackPlugin(),
  ]
}
