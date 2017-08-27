'use strict';

var _reactRouter = require('react-router');

var _createLocation = require('history/lib/createLocation');

var _createLocation2 = _interopRequireDefault(_createLocation);

var _server = require('react-dom/server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 'use strict';
// require('babel-register')({
//     presets: ['es2015', 'react']
// });
// require("node-jsx").install({
//   harmony: true,
//   extension: ".jsx"
// });
// import http from 'http';
var React = require('react');
var Router = require('react-router');
// var match= require('react-router').match;

// var renderToString= require('react-dom/server').renderToString;


var express = require('express');
var path = require('path');
var app = express();

var config = require('../webpack.config.js');
var webpack = require('webpack');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// require('node-jsx').install({  
//   extension: '.jsx'
// });

var routes = require('../components/routes.jsx');

// app.use(express.static(path.join(__dirname, 'public')))
//   .use(function (req, res, next) {
//     var router = Router.run({location: req.url, routes: routes});
//     router.run(function (Handler) {
//       var html = React.renderToString(React.createFactory(Handler)({
//         page: {
//           title: 'Isomorphic example app',
//           description: 'Simple server-client routing example with React, express &amp; react-router'
//         }
//       }));
//       html = `<!doctype html>${html}`
//       res.send(html);
//     });
//   })


// app.use(express.static('./public'));
// app.use('/', function (req, res) {
//     // res.render(path.resolve('public/index.html'),{});
//     console.log('send file'+path.resolve('client/index.html'));
//     res.sendFile(path.resolve('client/index.html'), {});
//     // res.render('index.html',{});
//     // res.sendFile('index.html',{});
// }).use(function (err, req, res, next) {
//     if (err) return res.send(err);
//   })
//   .listen(8080, function () {
//     console.log(`Listening on port ${this.address().port}`);
// });


app.use(function (req, res) {
    console.log('Routes ' + routes);
    if (routes[0] === undefined) console.log('Route 0 ' + routes[0]);
    (0, _reactRouter.match)({ routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {
        console.log('renderProps' + renderProps);
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            var componentHTML = (0, _server.renderToString)(React.createElement(_reactRouter.RoutingContext, renderProps));
            var HTML = '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset="utf-8">\n        <title>Isomorphic Redux Demo</title>\n      </head>\n      <body>\n        <div id="react-view">' + componentHTML + '</div>\n        <script type="application/javascript" src="/bundle.js"></script>\n      </body>\n  </html> \n';
            res.status(200).res.send(HTML);
            // res.status(200).send(renderToString(Ba()))
        } else {
            res.status(404).send('Not found');
        }
    });
});

var port = 8080;

app.listen(port, function (error) {
    if (error) throw error;
    console.log("Express server listening on port", port);
});

// http.createServer((req, res) => {

//     match({ routes, location: req.url }, (err, redirect, props) => {
//         if (props){
//             let markup = renderToString(<RouterContext {...props}/>)
//             res.write(markup)
//             res.end()
//         } else {
//             res.write("not found a 3ammi")
//             res.end()
//         }

//     })  
// }).listen(8888);