// require("node-jsx").install();
var jsx = require('node-jsx');
jsx.install();
// require('babel-register')({"presets": ["es2015"]});
// require("babel-core/register")({ 
// 	ignore: false 
// });

import express                   from 'express';
// import React                     from 'react';
// import { renderToString }        from 'react-dom/server'

var renderToString = require('react-dom/server');
import { RoutingContext, match } from 'react-router';
// var RoutingContext = require('react-router/match');
// var match = require('react-router/match');
// var createLocation = require('history/lib/createLocation');
var traceur = require('traceur');
// traceur.options.experimental = true;
traceur.require.makeDefault();
var App = require('../components/app');
// var  = require('');

import createLocation            from 'history/lib/createLocation';
// import App from '../components/app';

var renderToString  = require('react-dom/server');


// var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./public'));
// app.set('view engine', 'html');
// app.set('views', path.resolve('public'));
// app.engine('html', require('ejs').renderFile);

// app.use('*', function (req, res) {
//     res.sendFile(path.resolve('client/index.html'), {});
// });
app.use((req, res) => {
  const location = createLocation(req.url);

  match({ App, location }, (err, redirectLocation, renderProps) => {
    if (err) { 
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if (!renderProps) return res.status(404).end('Not found.');
    
    const InitialComponent = (
      <RoutingContext {...renderProps} />
    );

    const componentHTML = renderToString(InitialComponent);

    const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Redux Demo</title>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="/bundle.js"></script>
      </body>
  </html>    
`
    res.end(HTML);
  });
});
console.log('cool man now')

var port = 8080

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
