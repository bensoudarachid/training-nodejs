var webpack = require('webpack')
var path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
console.log('path to src =' + require('util').inspect(path.resolve('./src'), false, null))
// console.log('path.resolve(__dirname,src)='+require('util').inspect(path.resolve(__dirname,'src'), false, null))

//window.React = require('react');

// config.resolve = {
//     root: [path.resolve(__dirname,'src')],
//     // modules: [path.resolve(__dirname, 'src'),'node_modules'],
//     // root: ['src'],
//     // modulesDirectories: [path.resolve(__dirname,'src'),'node_modules'],
//     extensions: ['', '.js']
// }

module.exports = {
    // devtool: 'inline-source-map', // devtool: 'cheap-module-source-map',
    devtool: 'cheap-module-eval-source-map',
    // devtool: 'cheap-eval-source-map',
    // devtool: 'eval-cheap-module-source-map',
    // devtool:'#inline-source-map',
    // devtool: 'eval-source-map',
    // devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client?path=http://127.0.0.1:8081/__webpack_hmr',
        './src/app'
    ],
    output: {
        // path: path.join(__dirname, '.'),
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js',
//    devtoolModuleFilenameTemplate: '[absolute-resource-path]'
//Dont touch this. Very important to be able to jump to the original file in chrome and edit it there directly
        devtoolModuleFilenameTemplate: function (info) {
            const str = 'file:///' + info.absoluteResourcePath.replace(/\\/g, '\/')
            // const str = info.absoluteResourcePath.replace(/\\/g, '\/')
//      console.log('*******'+info.absoluteResourcePath+'------>'+str)
            return str
        }

//    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    // resolve: {
    //   extensions: ['', '.js', '.jsx'],
    //   root: [
    //     path.resolve(__dirname, 'src'),
    //     path.resolve(__dirname, 'src/test')
    //   ]
    // },
    resolve: {
        // root: [path.resolve(__dirname,'src')],
        modules: [path.resolve(__dirname, 'src'),path.resolve(__dirname, 'node_modules') ]
        // root: ['src'],
        // modulesDirectories: [path.resolve(__dirname,'src'),'node_modules'],
        // extensions: ['', '.js']
        // extensions: ['', '.js', '.es6']
    },
    // resolve: {
    //   modulesDirectories: [ path.join(__dirname, 'src')],
    //   extensions: ['', '.js']
    // },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader?retainLines=true,presets[]=react,presets[]=es2015,presets[]=react-hmre,presets[]=stage-2']
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.wav$|\.mp3$/,
                loader: 'url-loader?limit=150192'
                // loader: 'file-loader'
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     loaders: [ 'file-loader?hash=sha512&digest=hex&name=[name].[ext]',
            //         'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false, pngquant:{quality: "65-90", speed: 4}'
            //     ]
            // },

            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            // {
            //   test: /\.scss$/,
            //   loader: ExtractTextPlugin.extract('style-loader', 'css-loader','sass-loader')
            //   // loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            //   // loader: ExtractTextPlugin.extract({
            //   //   fallback: 'style-loader',
            //   //   use: 'css-loader!sass-loader'
            //   // })

            // },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            // { test: /\.css$/,
            //   loader: ExtractTextPlugin.extract({
            //     fallback: 'style-loader',
            //     use: 'css-loader'
            //   })
            // },


            {test: /\.(woff|woff2|ttf|eot)$/, loader: 'url-loader'}, //important also for twitter bootstrap
            // {
            //   test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            //   loader: 'url?limit=10000&mimetype=application/font-woff'
            // },
            // {
            //   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            //   loader: 'url?limit=10000&mimetype=application/octet-stream'
            // },
            // {
            //   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            //   loader: 'file'
            // },
            // {
            //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            //   loader: 'url?limit=10000&mimetype=image/svg+xml'
            // },
            {test: require.resolve('react'), loader: 'expose-loader?React'}
        ]
        // ,
        // rules: [
        //   {
        //     test: /\.css$/,
        //     use: ExtractTextPlugin.extract({
        //       fallback: 'style-loader',
        //       use: 'css-loader'
        //     })
        //   },
        //   {
        //     test: /\.scss$/,
        //     use: ExtractTextPlugin.extract({
        //       fallback: 'style-loader',
        //       use: 'css-loader!sass-loader'
        //     })
        //   }
        // ]
    },
    plugins: [
        // new ExtractTextPlugin('style.css'),
        new webpack.DefinePlugin({
            'process.env': {
                BROWSER: JSON.stringify(true)
                // ,NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            moment: 'moment',
            fullCalendar: 'fullcalendar'
        }),
        // new webpack.SourceMapDevToolPlugin('bundle.js.map', null,'[absolute-resource-path]', '[absolute-resource-path]'),
//    new webpack.SourceMapDevToolPlugin({filename: 'bundle.js.map'}),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
        // new webpack.NoErrorsPlugin()
    ]
}

