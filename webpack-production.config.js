
var webpack = require('webpack')
var path = require('path')

var AssetsPlugin = require('assets-webpack-plugin')
var assetsPluginInstance = new AssetsPlugin({filename: 'assets.json',path: path.join(__dirname, 'assets')})
// var assetsPluginInstance = new AssetsPlugin({filename: 'assets.json'})
// var pkg = require('./package.json')
// const glob = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const PurifyCSSPlugin = require('purifycss-webpack')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var WebpackCleanupPlugin = require('webpack-cleanup-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
const autoprefixer = require('autoprefixer')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//window.React = require('react');

module.exports = {
  // devtool: 'inline-source-map',
  // devtool: 'cheap-module-eval-source-map',
  //devtool: 'cheap-module-source-map', //original
  // devtool: 'source-map',
  entry: {
    
    publicapp: './src/app',//I need the js. the require.ensure parts are packed automatically in extra js files
    app: ['./src/app','./src/scenes/todo/todoapp.js','./src/app/routes/trainingroutes'],//I need the css of it
    

    vendor:[
      'es6-promise','html-entities','fullcalendar','immutable','lodash','react-router','validator',
      'redux','react-proxy','react-redux','redbox-react','util','redux-logger','whatwg-fetch',
      'react-router-redux','react-hot-api',
      'react-hot-loader','cookie','react-transform-hmr','react-big-calendar','react-cookie','react-dnd','react-dnd-html5-backend',
      'react-transform-catch-errors','hoist-non-react-statics',
      'react-deep-force-update','redux-thunk','global','isomorphic-fetch',
      'react-addons-pure-render-mixin'],
    // ,vendor: ['react-dom','jquery','material-design-lite','immutable','react','lodash','react-router','validator','html-entities','history','buffer','fbjs','es6-promise','redux','react-proxy','react-redux','redbox-react','util','redux-logger','whatwg-fetch']
    // ,vendor: ['cookie-parser','dialog-polyfill','es6-promise','escape-html',
    //   'form-data','jquery','immutable','isomorphic-fetch','lodash.clonedeep',
    //   'react-addons-pure-render-mixin','react-cookie','react-redux','react-router',
    //   'react-router-redux','react-tap-event-plugin','redux','redux-logger','redux-thunk','stats-js','validator']
  },

  output: {
    // path: path.join(__dirname, 'build/reactor'),
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    publicPath: '/', //code bundes will always be served from here. If not specified 'http://abbaslearning.royasoftware.com/trainings/item/2' is serving 1.bundle.js from wrong path
    chunkFilename: '[name].[chunkhash].bundle.js', 
    // '[name].js'
    // chunkFilename: '[name].bundle.js'

  },
  resolve: {
    // modulesDirectories: ['node_modules', 'src'],
    // extensions: ['', '.js']
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  module: {
    loaders: [
      // { test: /\.(jpe?g|png|gif|svg)$/i, loaders: [ 'url?limit=10000', 'img?minimize' ] },
      // { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000!img?progressive=true' },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [ 'file-loader?hash=sha512&digest=hex&name=[name].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false, pngquant:{quality: "65-90", speed: 4}'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        // loaders: ['react-hot', 'babel?retainLines=true,presets[]=react,presets[]=es2015,presets[]=react-hmre,presets[]=stage-2']
        loaders: ['babel-loader?retainLines=true,presets[]=react,presets[]=es2015,presets[]=stage-2']
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
      { test: /\.(woff|woff2|ttf|eot)$/, loader: 'url-loader'}, //important also for twitter bootstrap 
      {
        test: /\.css$/,
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        // loader: ExtractTextPlugin.extract('css-loader')
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','postcss-loader']
        })
      },
      {
        test: /\.scss$/,
        // loader:  ['style-loader', 'css-loader', 'sass-loader']
        // loader: ExtractTextPlugin.extract('css-loader!sass-loader')
        // loader: ExtractTextPlugin.extract({
        //   fallbackLoader: 'style-loader',
        //   loader: 'css-loader!sass-loader',
        // })
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','postcss-loader','sass-loader']
        })
        // loaders: ['style-loader','file-loader?name=[name].[hash].css!extract-loader','css-loader','sass-loader']
        // loaders: ['file-loader?name=abbas.[name].[hash].css','extract-loader','css-loader','sass-loader']
      },
      { test: require.resolve('react'), loader: 'expose-loader?React' }
    ]
  },
  plugins: [
    assetsPluginInstance,
    // new UglifyJsPlugin({
    //   minimize: true,
    //   compress: {
    //     warnings: false
    //   }
    // }),
    // new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.[chunkhash].bundle.js', minChunks: Infinity }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'commons',
    //   filename: 'commons.js',
    //   chunks: ['todos', 'trainings']
    // }),
    // new ExtractTextPlugin('[name].css'),
    new ExtractTextPlugin('[name].[chunkhash].css', {allChunks: true}),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        postcss: [autoprefixer]
      }
    }),
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


    new webpack.optimize.OccurrenceOrderPlugin(),


    // new webpack.NoErrorsPlugin(),
    new WebpackCleanupPlugin(),
    new CopyWebpackPlugin([
            // Copy directory contents to {output}/to/directory/ 
            // { from: 'src/reactor/images', to: 'images' }
      { from: 'src/images', to: 'images' }
      // ,{ from: 'vendor.bundle.js', to: 'vendor.bundle.js', force:true }
      // ,{ from: 'assets/assets.json' }
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

