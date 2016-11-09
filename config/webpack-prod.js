const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.load = function (PATHS) {
  return {
    entry: PATHS.app + '/entry.js',
    output: {
      path: PATHS.build,
      filename: 'bundle.js'
    },
    debug: false,
    resolve: {
      alias: {
        'react': 'react-lite',
        'react-dom': 'react-lite'
      },
      extensions: [
        '',
        '.js',
        '.jsx'
      ]
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css!sass')
        }, {
          test: /\.jsx*$/,
          exclude: /node_modules/,
          loader: 'babel'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin(
        './style.css'
      ),
      new HtmlWebpackPlugin({
        inject: false,
        title: 'Webpack demo',
        template: PATHS.app + '/Templates/app-basic.ejs'
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false,
        compress: {
          warnings: false,
          drop_console: true
        },
        mangle: {
          except: ['$'],
          screw_ie8: true,
          keep_fnames: false
        }
      })
    ]
  }
}
