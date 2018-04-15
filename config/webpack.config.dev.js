const baseConfig = require('./webpack.config.base')

const config = {
  ...baseConfig,
  mode: 'development',
  devtool: 'source-map',
  module: {
    ...baseConfig.module,
    rules: [
      ...baseConfig.module.rules,
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  plugins: [
    ...baseConfig.plugins
  ]
}

module.exports = config
