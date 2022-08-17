const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main.js',
    pathinfo: false
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@middlewares': path.resolve(__dirname, 'src/middlewares'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@actions': path.resolve(__dirname, 'src/actions'),
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    port: 3006,
    historyApiFallback: true
  }
}
