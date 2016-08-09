
var webpack = require('webpack');
var path = require('path');
//window.React = require('react');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        // 'webpack-dev-server/client?http://127.0.0.1:8880/',
        // 'webpack/hot/only-dev-server',

//specifying the exact path for hot deployment eliminates the 'cannot find route' on netflix zuul server
        // 'webpack-hot-middleware/client',
        'webpack-hot-middleware/client?path=http://localhost:8081/__webpack_hmr',
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
            { test: /\.css$/, loader: 'style!css' },
            { test: require.resolve("react"), loader: "expose?React" }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                BROWSER: JSON.stringify(true)
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};



