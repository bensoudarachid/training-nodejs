
var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
//window.React = require('react');

module.exports = {
  // devtool: 'inline-source-map',
  devtool: 'cheap-module-source-map',
  entry: [
    // 'webpack-hot-middleware/client?path=http://localhost:8081/__webpack_hmr',
    './src/client'
  ],
  output: {
    path: path.join(__dirname, 'build'),
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
        // loaders: ['react-hot', 'babel?retainLines=true,presets[]=react,presets[]=es2015,presets[]=react-hmre,presets[]=stage-2']
        loaders: ['babel?retainLines=true,presets[]=react,presets[]=es2015,presets[]=stage-2']
      },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, 
        loader: 'file-loader?name=images/[name].[ext]' 
      },
      // { test: /\.scss$/, loader: 'style!css!sass' },
      // { test: /\.css$/, loader: 'style!css' },
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
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true)
        ,NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}



