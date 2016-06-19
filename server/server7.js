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
import { fetchDataOnServer, reducer as fetching } from 'redux-fetch-data';

// var fetch = require('node-fetch');

var bodyParser = require('body-parser'); // is used for POST requests



var config = require('../webpack.config.js');
var webpack = require('webpack');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));


// app.use(express.static('./public'));

// app.set('view engine', 'ejs');

// app.get('*', (req, res) => {
//   res.render('index');
// });

app.get('*', (req, res,next) => {
  // routes is our object of React routes defined above
  console.log('Get request now');
  match({
    routes,
    location: req.url
  }, (err, redirectLocation, renderProps) => {
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
      // console.log('components-length = ' +components.length )
      // const Comp = components[components.length-1].WrappedComponent
      // // console.log(components[0])
      // // console.log(components[1])
      // // console.log(Comp.fetchData)
      // const fetchData = (Comp && Comp.fetchData) || (() => Promise.resolve())
      // console.log(fetchData)
      
      // fetchData().then(data => {
      //   console.log('server. test fetchData ' +data)
      //   // this.props.actions.addTodos(data.todos);
      // })
      // .catch(err => console.log('Booooo' + err));
      
      const initialState = {
        todos: [
          {
            task: 'make it now',
            isCompleted: false,
            id: 2
          },
          {
            task: 'ya do it',
            isCompleted: true,
            id: 3
          }
        ],
        user: {
          username: 'John connor',
          id: 13
        }
      }
      const store = createStore(reducers, initialState, applyMiddleware(thunkMiddleware))
      const {location, params, history} = renderProps

      // fetchData({ store, location, params, history })
      fetchDataOnServer(renderProps, store)
        .then(() => {
          console.log('Get request on 8080' + {...renderProps});
          // const body = renderToString(<RouterContext {...renderProps} />);
          const body = renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps} />
              </Provider>
          )
          const state = store.getState();
          res.send(`<!DOCTYPE html>
              <html>
                <head></head>
                <body>
                  <div id="root">${body}</div>
                  <script>window.__REDUX_STATE__ = ${JSON.stringify(state)}</script>
                  <script src="bundle.js"></script>
                </body>
              </html>`)
        }).catch((err) => next(err))


     // fetchData({ store, location, params, history }).then(response => response.json())
     //  .then(data => {
     //    // console.log(data.todos)
     //    this.props.actions.addTodos(data.todos);
     //    console.log('Get request on 8080' + {...renderProps});
     //    // const body = renderToString(<RouterContext {...renderProps} />);
     //    const body = renderToString(
     //      <Provider store={store}>
     //          <RouterContext {...renderProps} />
     //        </Provider>
     //    )
     //    const state = store.getState();
     //    res.send(`<!DOCTYPE html>
     //        <html>
     //          <head></head>
     //          <body>
     //            <div id="root">${body}</div>
     //            <script>window.__REDUX_STATE__ = ${JSON.stringify(state)}</script>
     //            <script src="bundle.js"></script>
     //          </body>
     //        </html>`)
     //  }).catch((err) => next(err))


    } else {

      // no route match, so 404. In a real app you might render a custom
      // 404 view here
      res.sendStatus(404);
    }
  });
});

app.post('/api/todos', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;
    console.log('server post method'+req.body.id)
    console.log('server post method'+req.body.token)

    res.send({ user_id, token, geo });
});

app.post('/api/todoslist', function(req, res) {
    // var param = req.body.param;
    console.log('server post method here : '+req.body.testparam)

    res.send(
      {
        todos: [
          {
            task: 'make it now baby',
            isCompleted: false,
            id: 4
          },
          {
            task: 'ya do it baby',
            isCompleted: true,
            id: 5
          }
        ]
      }
    );
});

var port = 8080

app.listen(port, function(error) {
  if (error)
    throw error;
  console.log("Express server listening on port", port);
});

// const server = http.createServer(app);

// server.listen(8080);
// server.on('listening', () => {
//   console.log('Listening on 8080');
// });