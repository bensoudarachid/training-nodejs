
var webpack = require('webpack');
var path = require('path');
//window.React = require('react');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        // 'webpack-dev-server/client?http://127.0.0.1:8880/',
        // 'webpack/hot/only-dev-server',
        'webpack-hot-middleware/client',
        './client'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: './bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?retainLines=true,presets[]=react,presets[]=es2015,presets[]=react-hmre,presets[]=stage-2']
            },
            { test: /\.scss$/, loader: 'style!css!sass' },
            { test: require.resolve("react"), loader: "expose?React" }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};



