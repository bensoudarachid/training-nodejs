
var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
//window.React = require('react');

module.exports = {
  devtool: 'inline-source-map',
  // devtool: 'cheap-module-source-map',
  // devtool: 'cheap-module-eval-source-map',
  
  entry: [
    'webpack-hot-middleware/client?path=http://127.0.0.1:8081/__webpack_hmr',
    './src/client'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
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
      { test: /\.js$/, loader: 'exports-loader' },
      // { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.wav$|\.mp3$/, 
      //   loader: 'file-loader?name=images/[name].[ext]' 
      // },      
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.wav$|\.mp3$/, 
        loader: 'url-loader?limit=8192' 
      },      
      { test: /\.scss$/, loader: 'style!css!sass' },
      // {
      //   test: /\.scss$/,
      //   loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      // },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(woff|woff2|ttf|eot)$/, loader: 'url'}, //important also for twitter bootstrap 
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
      { test: require.resolve('react'), loader: 'expose?React' }
    ]
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
      jquery: 'jquery'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}



