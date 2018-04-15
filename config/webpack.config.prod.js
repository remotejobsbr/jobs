const path = require('path')
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const extractSass = require('./extractSass.webpack')
const baseConfig = require('./webpack.config.base')
const packageJson = require('../package.json')

const config = {
  ...baseConfig,
  mode: 'production',

  entry: {
    app: './src/index.js',
    vendor: Object.keys(packageJson.dependencies)
      .filter(pckg => pckg !== 'normalize.scss')
  },

  module: {
    ...baseConfig.module,
    rules: [
      ...baseConfig.module.rules,
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }, {
            loader: 'sass-loader'
          }],
          fallback: 'style-loader'
        })
      }
    ]
  },

  plugins: [
    ...baseConfig.plugins,

    new CleanPlugin(['dist'], {
      root: path.join(__dirname, '..')
    }),

    extractSass,

    new webpack.DefinePlugin({
      'process.env.SERVER_ENV': JSON.stringify(process.env.SERVER_ENV)
    }),

    process.env.BUNDLE_ANALYZER && new BundleAnalyzerPlugin()
  ].filter(Boolean),

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    },
    runtimeChunk: true
  },
  output: {
    ...baseConfig.output,
    filename: 'js/[name]_[chunkhash].js'
  }
}

module.exports = config
