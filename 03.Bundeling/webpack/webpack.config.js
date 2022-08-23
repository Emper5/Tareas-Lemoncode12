
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  resolve: {
    extensions: [".js",".ts", ".tsx"]
  },
    entry: {
        app: './src/index.ts'
      },
    
    output: {
        filename: '[name].[chunkhash].js',
      },
    module: {
          rules: [
            {
              test: /\.tsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
            },
            {
              test: /\.scss$/,
              exclude: /node_modules/,
              use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
              test: /\.(png|jpg)$/,
              type: 'asset/resource',
            },
            {
              test: /\.html$/,
              loader: 'html-loader',
            },
          ],
        },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html', 
          template: "./src/index.html",
          scriptLoading:'blocking', 
        }),
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        }),
      ],
      devServer: {
           port: 8080,
      },
  };