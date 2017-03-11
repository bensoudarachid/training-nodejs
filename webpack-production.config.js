
var webpack = require('webpack')
var path = require('path')
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
  entry: {
    app: './src/app'
    // ,vendor: ['material-design-lite','react-dom','bootstrap','jquery','jquery','immutable','react','lodash','react-router','validator','html-entities','history','buffer','fbjs','es6-promise','redux','react-proxy','react-redux','redbox-react','util','redux-logger','whatwg-fetch']
    ,vendor: ['cookie-parser','dialog-polyfill','es6-promise','escape-html',
      'form-data','immutable','isomorphic-fetch','lodash.clonedeep',
      'react-addons-pure-render-mixin','react-cookie','react-redux','react-router',
      'react-router-redux','react-tap-event-plugin','redux','redux-logger','redux-thunk','stats-js','validator']
  },
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
    filename: 'bundle.js'
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
        loaders: [ 'file?hash=sha512&digest=hex&name=[hash].[ext]',
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
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
    new ExtractTextPlugin('style.css', {allChunks: true}),
    // new ExtractTextPlugin('[name].css'),
    // new PurifyCSSPlugin({
    //   // Give paths to parse for rules. These should be absolute! 
    //   paths: glob.sync(path.join(__dirname, 'src/app/*.js')),
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
        drop_console: true
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



