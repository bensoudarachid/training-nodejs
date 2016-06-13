import React from 'react'
import express from 'express'
import http from 'http'
import { RouterContext, match } from 'react-router'
import { renderToString } from 'react-dom/server'
import { routes } from '../components/routes';
import { createStore, applyMiddleware } from 'redux'  
import reducers from '../redux/reducers'
import thunkMiddleware from 'redux-thunk'  
import { Provider } from 'react-redux'



var config = require('../webpack.config.js');
var webpack = require('webpack');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));


// app.use(express.static('./public'));

// app.set('view engine', 'ejs');

// app.get('*', (req, res) => {
//   res.render('index');
// });

app.get('*', (req, res) => {
  // routes is our object of React routes defined above
  console.log('Get request now');
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      // something went badly wrong, so 500 with a message
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      // we matched a ReactRouter redirect, so redirect from the server
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      // if we got props, that means we found a valid component to render
      // for the given route
      const components = renderProps.components

    // If the component being shown is our 404 component, then set appropriate status
    if (components.some((c) => c && c.displayName === 'error-404')) {
      res.status(404)
    }

    const Comp = components[components.length - 1].WrappedComponent
    const fetchData = (Comp && Comp.fetchData) || (() => Promise.resolve())

    const initialState = {}
    const store = createStore(reducers, initialState, applyMiddleware(thunkMiddleware))
    const { location, params, history } = renderProps

    // fetchData({ store, location, params, history })
    //   .then(() => {
        console.log('Get request on 8080'+{...renderProps});
        // const body = renderToString(<RouterContext {...renderProps} />);
        const body = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        )
        console.log('Get request on 8080 rendered');

        const state = store.getState();

    // <link rel="stylesheet" href="bundle.css">
        res.send(`<!DOCTYPE html>
          <html>
            <head></head>
            <body>
              <div id="root">${body}</div>
              <script>window.__REDUX_STATE__ = ${JSON.stringify(state)}</script>
              <script src="bundle.js"></script>
            </body>
          </html>`)
      // })
      // .catch((err) => next(err))

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