const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: outputPath
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@emotion/babel-preset-css-prop'
            ],
            plugins: ['emotion']
          }
        }
      },
      {
        test: /\.html$/,
        use: { loader: 'html-loader' }
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
