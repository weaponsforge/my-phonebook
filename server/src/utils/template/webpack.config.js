const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Files to watch for
  entry: './app/index.js',

  // Bundle/build output directory
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './app/index.html'
    })
  ],

  // Development server set-up - define static assets directory and paths
  devServer: {
    open: true,
    hot: false, // disable hot reload for plain HTML/CSS/JS development
    compress: true,
    port: 3003,
    static: {
      directory: path.join(__dirname, 'app'),
      publicPath: '/'
    }
  },

  watch: (process.env.NODE_ENV === 'development')
}
