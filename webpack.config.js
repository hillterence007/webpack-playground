const webpack = require('webpack');

const webpackConfig = {
    entry: "./app/entry.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    debug: true,
    devtool: 'source-map',
    devServer:{
        contentBase: __dirname + '/app'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { 
                test: /\.scss$/, 
                loader: "style!css!sass"
            }, {
                test: /\.jsx*$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};

module.exports = webpackConfig;