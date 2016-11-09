exports.load = function (PATHS) {
  return {
    entry: PATHS.app + '/entry.js',
    output: {
      path: PATHS.build,
      filename: 'bundle.js'
    },
    debug: true,
    devtool: 'source-map',
    devServer: {
      contentBase: PATHS.app
    },
    resolve: {
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
          exclude: /node_modules/,
          loader: 'style!css!sass'
        }, {
          test: /\.jsx*$/,
          exclude: /node_modules/,
          loader: 'babel'
        }
      ]
    }
  }
}
