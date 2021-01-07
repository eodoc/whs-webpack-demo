const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.whs$/, use: './loaders/whs-loader.js' },
      { test: /\.vue$/, use: 'vue-loader' }

    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}