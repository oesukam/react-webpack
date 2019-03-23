const path = require('path');
const HtmlWepackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: path.join(__dirname, 'src', 'static'),
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWepackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      stats: { children: false },
      filename: './index.html',
    }),
    new CopyPlugin([
      { from: './src/static/fonts', to: './fonts' },
      { from: './src/static/css', to: './css' },
    ]),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
