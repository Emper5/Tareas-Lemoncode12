const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  resolve: {
    extensions: [".js",".jsx"]
  },
    entry: {
        app: './src/index.jsx'
      },
    
    output: {
        filename: '[name].[chunkhash].js',
      },
    module: {
          rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
            },
            
        {
              test: /\.(png|jpg)$/,
              type: "asset/resource",
            },
          ],
        },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html', 
          template: "./src/index.html",
          scriptLoading:'blocking', 
        }),
      ],
  };