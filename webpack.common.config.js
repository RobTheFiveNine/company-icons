const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] },
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'logos'),
        publicPath: '/logos',
      },
      {
        directory: path.join(__dirname, 'src'),
        publicPath: '/src',
      },
    ],
    compress: true,
    port: 8080,
    proxy: {
      '/icons.mini.json': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/icons.mini.json': '/src/icons.json',
        },
      },
    },
    historyApiFallback: true,
  },
};
