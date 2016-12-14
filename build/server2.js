'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _reactRouter = require('react-router');

var _createLocation = require('history/lib/createLocation');

var _createLocation2 = _interopRequireDefault(_createLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require("node-jsx").install();
var jsx = require('node-jsx');
jsx.install();
// require('babel-register')({"presets": ["es2015"]});
// require("babel-core/register")({ 
// 	ignore: false 
// });

// import React                     from 'react';
// import { renderToString }        from 'react-dom/server'

var renderToString = require('react-dom/server');

// var RoutingContext = require('react-router/match');
// var match = require('react-router/match');
// var createLocation = require('history/lib/createLocation');
var traceur = require('traceur');
// traceur.options.experimental = true;
traceur.require.makeDefault();
var App = require('../components/app');
// var  = require('');

// import App from '../components/app';

var renderToString = require('react-dom/server');

// var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = (0, _express2.default)();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(_express2.default.static('./public'));
// app.set('view engine', 'html');
// app.set('views', path.resolve('public'));
// app.engine('html', require('ejs').renderFile);

// app.use('*', function (req, res) {
//     res.sendFile(path.resolve('client/index.html'), {});
// });
app.use(function (req, res) {
  var location = (0, _createLocation2.default)(req.url);

  (0, _reactRouter.match)({ App: App, location: location }, function (err, redirectLocation, renderProps) {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if (!renderProps) return res.status(404).end('Not found.');

    var InitialComponent = React.createElement(_reactRouter.RoutingContext, renderProps);

    var componentHTML = renderToString(InitialComponent);

    var HTML = '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset="utf-8">\n        <title>Isomorphic Redux Demo</title>\n      </head>\n      <body>\n        <div id="react-view">' + componentHTML + '</div>\n        <script type="application/javascript" src="/bundle.js"></script>\n      </body>\n  </html>    \n';
    res.end(HTML);
  });
});
console.log('cool man now');

var port = 8080;

app.listen(port, function (error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});