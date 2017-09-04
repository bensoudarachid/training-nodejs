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
import {RoutingContext, match} from 'react-router';
import createLocation from 'history/lib/createLocation';
// var renderToString= require('react-dom/server').renderToString;
import {renderToString} from 'react-dom/server'

var express = require('express');
var path = require('path');
var app = express();

var config = require('../webpack.config.js');
var webpack = require('webpack');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
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
//     console.log(`Listening on expressPort ${this.address().expressPort}`);
// });


app.use(function (req, res) {
    console.log('Routes ' + routes)
    if (routes[0] === undefined)
        console.log('Route 0 ' + routes[0])
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        console.log('renderProps' + renderProps)
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            const componentHTML = renderToString(<RoutingContext {...renderProps} />);
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
            res.status(200).res.send(HTML);
            // res.status(200).send(renderToString(Ba()))
        } else {
            res.status(404).send('Not found')
        }
    })
});


var port = 8080

app.listen(port, function (error) {
    if (error) throw error;
    console.log("Express server listening on expressPort", port);
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