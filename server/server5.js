import React from 'react'
import express from 'express'
import http from 'http'
import { RoutingContext, match } from 'react-router'
import { renderToString } from 'react-dom/server'
import { routes } from '../components/routes';



var config = require('../webpack.config.js');
var webpack = require('webpack');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));


app.use(express.static('./public'));

app.set('view engine', 'ejs');

// app.get('*', (req, res) => {
//   res.render('index');
// });

app.get('*', (req, res) => {
  // routes is our object of React routes defined above
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      // something went badly wrong, so 500 with a message
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      // we matched a ReactRouter redirect, so redirect from the server
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      // if we got props, that means we found a valid component to render
      // for the given route
      const markup = renderToString(<RoutingContext {...props} />);

      // render `index.ejs`, but pass in the markup we want it to display
      res.render('index', { markup })

    } else {
      // no route match, so 404. In a real app you might render a custom
      // 404 view here
      res.sendStatus(404);
    }
  });
});

var port = 8080

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});

// const server = http.createServer(app);

// server.listen(8080);
// server.on('listening', () => {
//   console.log('Listening on 8080');
// });