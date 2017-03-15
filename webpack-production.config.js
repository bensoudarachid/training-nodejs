
var webpack = require('webpack')
var path = require('path')
// var pkg = require('./package.json')
// const glob = require('glob')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// const PurifyCSSPlugin = require('purifycss-webpack')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var WebpackCleanupPlugin = require('webpack-cleanup-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
//window.React = require('react');

module.exports = {
  // devtool: 'inline-source-map',
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'cheap-module-source-map',
  // devtool: 'source-map',
  entry: {
    // app: ['./src/app','./src/scenes/todo/todoapp.js','./src/scenes/training/trainingapp.js']
    app: './src/app'
    // ,todos:['./src/scenes/todo/todoapp.js']
    // ,trainings:['./src/scenes/training/trainingapp.js']
    // ,vendor  : Object.keys(pkg.dependencies)
    ,vendor:['immutable','lodash','react-router','validator','html-entities',
      'es6-promise','redux','react-proxy','react-redux','redbox-react','util','redux-logger','whatwg-fetch',
      'react-router-redux','react-hot-api',
      'react-hot-loader','cookie','react-transform-hmr','react-cookie',
      'react-transform-catch-errors','hoist-non-react-statics',
      'react-deep-force-update','redux-thunk','global','isomorphic-fetch',
      'react-addons-pure-render-mixin'],
    // ,vendor: ['react-dom','jquery','material-design-lite','immutable','react','lodash','react-router','validator','html-entities','history','buffer','fbjs','es6-promise','redux','react-proxy','react-redux','redbox-react','util','redux-logger','whatwg-fetch']
    // ,vendor: ['cookie-parser','dialog-polyfill','es6-promise','escape-html',
    //   'form-data','jquery','immutable','isomorphic-fetch','lodash.clonedeep',
    //   'react-addons-pure-render-mixin','react-cookie','react-redux','react-router',
    //   'react-router-redux','react-tap-event-plugin','redux','redux-logger','redux-thunk','stats-js','validator']
  },
    // ,vendor:['react-dom','jquery','material-design-lite','immutable','react','lodash','react-router','validator','html-entities',
    //   'es6-promise','redux','react-proxy','react-redux','redbox-react','util','redux-logger','whatwg-fetch',
    //   'react-router-redux','react-hot-api',
    //   'react-hot-loader','cookie','react-transform-hmr','react-cookie',
    //   'react-transform-catch-errors','hoist-non-react-statics',
    //   'react-deep-force-update','redux-thunk','global','isomorphic-fetch',
    //   'react-addons-pure-render-mixin'],
    // ,vendor:['react-dom','jquery','material-design-lite','immutable','react','lodash','react-router','validator','html-entities','history',
    //   'buffer','fbjs','es6-promise','redux','react-proxy','react-redux','redbox-react','util','redux-logger','whatwg-fetch',
    //   'webpack-hot-middleware','react-router-redux','deep-diff','react-hot-api','error-stack-parser','style-loader','node-libs-browser',
    //   'querystring','react-hot-loader','ansi-html','deep-equal','cookie','react-transform-hmr','stackframe','base64-js','react-cookie',
    //   'react-transform-catch-errors','object-assign','ieee754','warning','invariant','css-loader','query-string','hoist-non-react-statics',
    //   'react-deep-force-update','symbol-observable','redux-thunk','webpack','global','isomorphic-fetch','strict-uri-encode','strip-ansi',
    //   'ansi-regex','isarray','react-addons-pure-render-mixin'],


    // ,vendor: ['cookie-parser','dialog-polyfill','es6-promise','escape-html',
    //   'form-data','immutable','isomorphic-fetch','lodash.clonedeep',
    //   'react','react-addons-pure-render-mixin','react-cookie','react-dom','react-redux','react-router',
    //   'react-router-redux','react-tap-event-plugin','redux','redux-logger','redux-thunk','stats-js','validator']
    // ,vendor: ['cookie-parser','dialog-polyfill','es6-promise','escape-html',
    //   'form-data','immutable','isomorphic-fetch','jquery','lodash.clonedeep',
    //   'react','react-addons-pure-render-mixin','react-cookie','react-dom','react-redux','react-router',
    //   'react-router-redux','react-tap-event-plugin','redux','redux-logger','redux-thunk','stats-js','validator']
    // ,vendor: ['bootstrap','cookie-parser','dialog-polyfill','es6-promise','escape-html',
    //   'form-data','immutable','isomorphic-fetch','jquery','lodash.clonedeep','material-design-lite',
    //   'react','react-addons-pure-render-mixin','react-cookie','react-dom','react-redux','react-router',
    //   'react-router-redux','react-tap-event-plugin','redux','redux-logger','redux-thunk','stats-js','validator']
    // ,vendor: ['body-parser','bootstrap','compression','cookie-parser','dialog-polyfill','es6-promise','escape-html',
    //   'form-data','immutable','inline-style-prefixer','isomorphic-fetch','jquery','lodash.clonedeep','material-design-lite',
    //   'path','react','react-addons-pure-render-mixin','react-cookie','react-dom','react-redux','react-router',
    //   'react-router-redux','react-tap-event-plugin','redux','redux-logger','redux-thunk','stats-js','validator']

      // 'babel','babel-cli','babel-core','babel-loader','babel-preset-es2015','babel-preset-react-hmre','babel-preset-stage-2',
      // 'babel-register','body-parser','bootstrap','compression','cookie-parser','dialog-polyfill','ejs','es6-promise','escape-html',
      // 'express','form-data','immutable','inline-style-prefixer','isomorphic-fetch','jquery','lodash.clonedeep','material-design-lite',
      // 'multer','node-jsx','path','react','react-addons-pure-render-mixin','react-cookie','react-dom','react-redux','react-router',
      // 'react-router-redux','react-tap-event-plugin','redux','redux-logger','redux-thunk','serve-favicon','stats-js','traceur','validator'

    

  // entry: [
  //   './src/app'
  // ],
  output: {
    // path: path.join(__dirname, 'build/reactor'),
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    // chunkFilename: '[name]-[chunkhash].js', 
    chunkFilename: '[name].js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      // { test: /\.(jpe?g|png|gif|svg)$/i, loaders: [ 'url?limit=10000', 'img?minimize' ] },
      // { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000!img?progressive=true' },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [ 'file?hash=sha512&digest=hex&name=[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false, pngquant:{quality: "65-90", speed: 4}'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        // loaders: ['react-hot', 'babel?retainLines=true,presets[]=react,presets[]=es2015,presets[]=react-hmre,presets[]=stage-2']
        loaders: ['babel?retainLines=true,presets[]=react,presets[]=es2015,presets[]=stage-2']
      },
      // { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, 
      //   loader: 'file-loader?name=images/[name].[ext]' 
      // },

      // { test: /\.scss$/, loader: 'style!css!sass' },
      // { test: /\.css$/, loader: 'style!css' },
      // {
      //   test: /\.scss$/,
      //   loaders: ['style/url', 'file?name=_build_/[name].[hash].css!extract','css-loader','sass?indentedSyntax=true']
      // },
      { test: /\.(woff|woff2|ttf|eot)$/, loader: 'url'}, //important also for twitter bootstrap 
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      },
      { test: require.resolve('react'), loader: 'expose?React' }
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'commons',
    //   filename: 'commons.js',
    //   chunks: ['todos', 'trainings']
    // }),
    // new ExtractTextPlugin('[name].css'),
    new ExtractTextPlugin('[name].css', {allChunks: true}),
    // new ExtractTextPlugin('[name].css'),
    // new PurifyCSSPlugin({
    //   paths: glob.sync(path.join(__dirname, '**', '*'),{ nodir: true }),
    // }),

    new OptimizeCssAssetsPlugin({
      // assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.ProvidePlugin({   
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),


    // new webpack.optimize.AggressiveMergingPlugin(),
    // new webpack.optimize.AggressiveMergingPlugin({
    //   minSizeReduce: 2,
    //   moveToParents: true,
    // }),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.DedupePlugin(),

    // new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
  // Don't beautify output (enable for neater output)
      beautify: false,
  // Eliminate comments
      comments: false,
  // Compression specific options
      compress: {
        warnings: false,
  // Drop `console` statements
        drop_console: true,
        
        unused: true,
        dead_code: true, // big one--strip code that will never execute
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        sequences: true,
        booleans: true,        
      },
  // Mangling specific options
      mangle: {
  // Don't mangle $
        except: ['$'],
  // Don't care about IE8
        screw_ie8 : true,
  // Don't mangle function names
        keep_fnames: true
      }
    }),
    // new CompressionPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0
    // }),


    new webpack.NoErrorsPlugin(),
    new WebpackCleanupPlugin(),
    new CopyWebpackPlugin([
            // Copy directory contents to {output}/to/directory/ 
            // { from: 'src/reactor/images', to: 'images' }
            { from: 'src/images', to: 'images' }
    ])
  ]
  // ,
  // imagemin: {
  //   gifsicle: { interlaced: false },
  //   jpegtran: {
  //     progressive: true,
  //     arithmetic: false
  //   },
  //   optipng: { optimizationLevel: 5 },
  //   pngquant: {
  //     floyd: 0.5,
  //     speed: 2
  //   },
  //   svgo: {
  //     plugins: [
  //       { removeTitle: true },
  //       { convertPathData: false }
  //     ]
  //   }
  // }
}

// function isExternal(module) {
//   var userRequest = module.userRequest

//   if (typeof userRequest !== 'string') {
//     return false
//   }

//   return userRequest.indexOf('bower_components') >= 0 ||
//          userRequest.indexOf('node_modules') >= 0 ||
//          userRequest.indexOf('libraries') >= 0
// }

