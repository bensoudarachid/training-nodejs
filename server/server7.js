import React from 'react'
import express from 'express'
import http from 'http'
import { RouterContext, match } from 'react-router'
import { renderToString } from 'react-dom/server'
import { routes } from '../components/routes';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../redux/reducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import { Provider } from 'react-redux'

import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

// import { fetchDataOnServer, reducer as fetching } from 'redux-fetch-data';

// var fetch = require('node-fetch');

var bodyParser = require('body-parser'); // is used for POST requests



var config = require('../webpack.config.js');
var webpack = require('webpack');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var favicon = require('serve-favicon');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));




app.use(favicon('./images/favicon.ico'));

// app.use(express.static('./public'));

// app.set('view engine', 'ejs');

// app.get('*', (req, res) => {
//   res.render('index');
// });
app.get('/api/*', (req, res) => {
  console.log('GET API '+req.url)
  // console.log('GET API Auth: '+req.headers.authorization )
  var employee = JSON.stringify({
      'EmpName': 'VB',
      'Salary': 52000,
      'DeptName': 'HR',
      'Designation': 'LEAD'
  });

  var extServerOptionsPost = {
    host: '127.0.0.1',
    port: '8083',
    path: req.url,
    method: 'GET',
    headers: req.headers
    // {
    //   'Content-Type': 'application/json',
    //   // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
    //   'Authorization': req.headers.authorization
    // }
  };

  // var data = {};
  var reqPost = http.request(extServerOptionsPost, function(res2) {
    // console.log("response statusCode: ", res.statusCode);
    res2.on('data', function(data) {
      // console.log('Server. Got Result data:');
      // process.stdout.write(data);
      console.log('GET Operation Completed.\n\n');
      res.send(data)

    });
    res2.on('error', function(e) {
      console.error(e);
    });

  });
  reqPost.end();
});

app.post('/api/*', function(req, res) {
  // var param = req.body.param;
  console.log('POST API. '+req.url)
  // console.log('POST API YEAAAAH req.headers '+req.headers)
  // console.log(req.headers)
  // console.log('POST API YEAAAAH req.body '+req.body)
  // console.log(req.body)
  const dataSend =  JSON.stringify(req.body);
  var extServerOptionsPost = {
    host: '127.0.0.1',
    port: '8083',
    path: req.url,
    method: 'POST',
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(dataSend),
        'Content-Type': 'application/json',
        authorization: req.headers.authorization
    }    // body: req.body
    // {
    //   'Content-Type': 'application/json',
    //   'Authorization': req.headers.authorization
    // }
  };

  // var data = {}
  var reqPost = http.request(extServerOptionsPost, function(res2) {
    // console.log("response statusCode: ", res.statusCode)
    res2.on('data', function(data) {
      // console.log('Server. Got Result data:\n')
      // process.stdout.write(data);
      console.log('POST Operation Completed.\n\n')
      res.send(data)

    });
    res2.on('error', function(e) {
      console.error(e)
    })

  })
  reqPost.write(dataSend)
  reqPost.end()
});



































app.get('*', (req, res) => {
  // routes is our object of React routes defined above
  console.log('');console.log('');console.log('');
  console.log('*********************************************')
  console.log('Get request now just came: ' + req.url)

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

      const initialState = {}
      // const store = createStore(reducers, initialState, applyMiddleware(thunkMiddleware))
      // const store = createStore(reducers, initialState)
      const logger = createLogger();
      const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
      var dispactions = bindActionCreators(actions, store.dispatch)
      const {location, params, history} = renderProps

      match({
        routes,
        location: req.url
      }, (error, redirectLocation, renderProps) => {
        const promises = renderProps.components
          .filter((component) => component.fetchData)
          .map((component) => component.fetchData(dispactions))
        Promise.all(promises).then(() => {
          // res.status(200).send(renderView())
          console.log('resolved')
          const body = renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps} />
              </Provider>
          )
          // console.log('Server. body '+body);
          const state = store.getState()
          res.status(200).send(`<!DOCTYPE html>
              <html>
                <head></head>
                <body>
                  <h4>WAHNSINN</h4>
                  <div id="root">${body}</div>
                  <script>window.__REDUX_STATE__ = ${JSON.stringify(state)}</script>
                  <script src="bundle.js"></script>
                </body>
              </html>`)
        }).catch(err => console.log('Booooo' + err));
      })

      // const state = store.getState()
      // console.log('Server. Render now = ' + JSON.stringify(state))
      // const body = renderToString(
      //   <Provider store={store}>
      //       <RouterContext {...renderProps} />
      //     </Provider>
      // )

    // res.send(`<!DOCTYPE html>
    //     <html>
    //       <head></head>
    //       <body>
    //         <h4>WAHNSINN</h4>
    //         <div id="root">${body}</div>
    //         <script>window.__REDUX_STATE__ = ${JSON.stringify(state)}</script>
    //         <script src="bundle.js"></script>
    //       </body>
    //     </html>`)
    } else {

      // no route match, so 404. In a real app you might render a custom
      // 404 view here
      res.sendStatus(404);
    }
  });
});




// function get() {
//     http.request(extServerOptions, function (res) {
//         res.setEncoding('utf8');
//         res.on('data', function (data) {
//             emp = JSON.parse(data);
//             emp.foreach(function (e) {
//                 console.log(e.EmpNo + "\t" + e.EmpName + "\t" + e.Salary + "\t" + e.DeptName + "\t" + e.Designation);
//             });
//         });
 
//     }).end();
// };
var port = 8081

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