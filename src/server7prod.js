// require('babel-core/register')
// require('babel-register')({
//   'presets': ['es2015']
// })
import React from 'react'
import express from 'express'
import http from 'http'
import { RouterContext, match } from 'react-router'
import { renderToString } from 'react-dom/server'
import { routes } from './components/routes'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './services/rootreducer'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import fs from 'fs'
import multer from 'multer'

import { Provider } from 'react-redux'

import { bindActionCreators } from 'redux'
import actions from './services/actions'

var FormData = require('form-data')
const util = require('util')
var compression = require('compression')
// import { fetchDataOnServer, reducer as fetching } from 'redux-fetch-data';

// var fetch = require('node-fetch');

var bodyParser = require('body-parser') // is used for POST requests

const appbasename=actions.appbasename

// var config = require('../webpack.config.js')
// var webpack = require('webpack')

const app = express()
// var isProduction = process.env.NODE_ENV === 'production'
// console.log('isProduction is '+isProduction)

var favicon = require('serve-favicon')

var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// if( isProduction ){
//   var compiler = webpack(config)
//   var webpackDevMiddleware = require('webpack-dev-middleware')
//   var webpackHotMiddleware = require('webpack-hot-middleware')
//   app.use(webpackDevMiddleware(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
//   }))
//   app.use(webpackHotMiddleware(compiler))
// }



app.use(favicon('./images/favicon.ico'))

// app.use(express.static('./public'));
// console.log('dirname = '+__dirname )
app.use(express.static(__dirname ))

// app.set('view engine', 'ejs');

// app.get('*', (req, res) => {
//   res.render('index');
// });
//const appurl = '/react'

process.on('uncaughtException', function (err) {
  console.log('serverjs. Process uncatched exception. See if you cant handle it anyhow else'+err)
})

app.post(appbasename+'/api/*/fileupload/*', upload.single('uploadfile'), function(req, res) {
  // const dataSend =  JSON.stringify(req.body)
  // console.log('POST API. data = '+dataSend)
  //   console.log(req.file)
  if (!req.file) {
    return res.status(400).send('No file uploaded.')
  }
  console.log('POST API. Uploading file orig name '+req.file.originalname, ', name '+req.file.name)

  // console.log('POST API. req.body.authorizationtoken = '+req.param('authorizationtoken'))//req.body.authorizationtoken)
  const authtoken=req.body.authorizationtoken!==undefined?'Bearer '+req.body.authorizationtoken:req.headers.authorization
  // console.log('POST API. data = '+dataSend)
  // dataSend.file=fs.createReadStream(req.file.path)

  var form = new FormData()
  // form.append('todoimage', fs.readFileSync(req.file.path), 'todoimage')
  form.append('uploadfile', req.file.buffer, req.file.originalname)
  // form.append('todoimage', fs.createReadStream(req.file.path))
  var headers = form.getHeaders()
  headers.authorization=authtoken
  // console.log('POST API. form buffer = '+util.inspect(req.file, false, null))

  var extServerOptionsPost = {
    host: req.headers.host,
    port: '8083',
    path: req.url,
    method: 'POST',
    headers:headers
  }
  var reqPost = http.request(extServerOptionsPost)
  form.pipe(reqPost)

  reqPost.on('response', function(res2) {
    // console.log(res.statusCode)
    var data = []
    // console.log('working with chunks. better for images. Response status '+util.inspect(res2, false, null) )
    res2.on('data', function(chunk) {
      data.push(chunk)
    }).on('error', function(e) {
      console.log('Error uploading '+e)
    }).on('end', function() {
      var buffer = Buffer.concat(data)
      console.log('working with chunks. better for images. Response is '+buffer)
      res.send({message:'operation successful'})
      // res.sendStatus(res2.statusCode)
    })
  })

  reqPost.on('error', function(e) {
    console.log('server resource not there! send empty json')
    console.error(e)
    res.send({error:'server unavailable',
      errorDescription:'server is not responding'
    })
    // return
  })
  // reqPost.write(dataSend)
  reqPost.end()
})

app.get(appbasename+'/api/*', (req, res) => {
  console.log('GET API '+req.url)
  console.log('GET API. '+req.headers.host)
  // const myhost = 'abbaslearning.royasoftware.com'
  // console.log('GET API. Call alternative'+myhost)
  // console.log('GET API Auth: '+req.headers.authorization )
  // var employee = JSON.stringify({
  //   'EmpName': 'VB',
  //   'Salary': 52000,
  //   'DeptName': 'HR',
  //   'Designation': 'LEAD'
  // })

  var extServerOptionsPost = {
    host: req.headers.host,
    port: '8083',
    path: req.url,
    method: 'GET',
    headers: req.headers
    // {
    //   'Content-Type': 'application/json',
    //   // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
    //   'Authorization': req.headers.authorization
    // }
  }

  var reqPost = http.request(extServerOptionsPost, function(res2) {
    res2.on('data', function(data) {
      console.log('GET Operation Completed.\n\n')
      res.send(data)
    })
  })
  reqPost.on('error', function(e) {
    // console.log('server resource not there! send empty json')
    // console.error(e)
    res.send({error:'server unavailable',
      errorDescription:'server is not responding'
    })
  })

  reqPost.end()
})

app.post(appbasename+'/api/*', function(req, res) {
  // var param = req.body.param;
  console.log('POST API. '+req.url)
  console.log('POST API. '+req.headers.host)
  // const myhost = 'abbaslearning.royasoftware.com'
  // console.log('POST API. Call alternative'+myhost)
  // console.log('POST API YEAAAAH req.headers '+req.headers)
  // console.log(req.headers)
  // console.log('POST API YEAAAAH req.body '+req.body)
  // console.log(req.body)
  const dataSend =  JSON.stringify(req.body)
  var extServerOptionsPost = {
    host: req.headers.host,
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
  }

  // var data = {}
  var reqPost = http.request(extServerOptionsPost, function(res2) {
    // console.log("response statusCode: ", res.statusCode)
    res2.on('data', function(data) {
      // console.log('Server. Got Result data:\n')
      // process.stdout.write(data);
      console.log('POST Operation Completed.\n\n')
      res.send(data)

    })
  })
  reqPost.on('error', function(e) {
    // console.log('server resource not there! send empty json')
    // console.error(e)
    res.send({error:'server unavailable',
      errorDescription:'server is not responding'
    })
  })

  reqPost.write(dataSend)
  reqPost.end()
})










var errorfile = __dirname + '/images/0.png'

app.get(appbasename+'/*', (req, res) => {
  // routes is our object of React routes defined above
  console.log('');console.log('');console.log('')
  console.log('*********************************************')
  console.log('Get request now just came: ' + req.url)
  // console.log(routes)
  if( req.url.indexOf('.') !== -1){
    console.log('Send File: ' + __dirname+ req.url)
    // res.status(200).sendFile(__dirname + req.url)
    var file = __dirname + req.url

    // res.writeHead(200, {
    //   'Content-Type': 'text/html'
    // })
    fs.readFile(file, function(err, data) {
      if (err){
        console.log('Error file not found. Send error File: ' + errorfile)
        res.status(200).sendFile(errorfile)
      }else
      // res.contentLength = stat.size
        res.end(data, 'binary')
    })

    // var file = __dirname + req.url
    // fs.stat(file, function (err, stat) {
    //   var img = fs.readFileSync(file)
    //   // res.contentType = 'image/png'
    //   res.contentLength = stat.size
    //   res.end(img, 'binary')
    // })
  }else{
    match({
      routes,
      location: req.url
    }, (err, redirectLocation, renderProps) => {
      if (err) {
      // something went badly wrong, so 500 with a message
        res.status(500).send(err.message)
      } else if (redirectLocation) {
      // we matched a ReactRouter redirect, so redirect from the server
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
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
        const logger = createLogger()
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
            var d = new Date()
            var hour = d.getHours()
            console.log('hour of the day = '+hour)
            var style = 'http://rlearn.herokuapp.com/style.css'
            var bundle = 'http://rlearn.herokuapp.com/bundle.js'
            if(hour < 7 || hour > 22){
              style = '/style.css'
              bundle = '/bundle.js'
            }
                // <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
                // <link href='http://fonts.googleapis.com/css?family=Roboto:400,300,300italic,500,400italic,700,700italic' rel='stylesheet' type='text/css'>
                // <link rel="stylesheet" href="//storage.googleapis.com/code.getmdl.io/1.0.1/material.teal-red.min.css" />
                // <script src="//storage.googleapis.com/code.getmdl.io/1.0.1/material.min.js"></script>                

          // console.log('Server. body '+body);
            const state = store.getState()
            res.status(200).send(`<!DOCTYPE html>
              <html>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
                <link rel="stylesheet" type="text/css" href="${style}" />
                </head>
                <body style="background-color:#003870">
                  <div id="root">${body}</div>
                  <script>window.__REDUX_STATE__ = ${JSON.stringify(state)}</script>
                  <script src="${bundle}"></script>
                </body>
              </html>`)
          }).catch(err => console.log('Booooo' + err))
        })
   // <link rel="stylesheet" type="text/css" href="http://rlearn.herokuapp.com/style.css" />
   // <script src="http://rlearn.herokuapp.com/bundle.js"></script>
//              <link rel="stylesheet" type="text/css" href="http://rlearn.herokuapp.com/style.css" />
//              <script src="http://rlearn.herokuapp.com/bundle.js"></script>
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
        res.sendStatus(404)
      }
    })
  }
})


// setInterval(function() {
//   http.get('http://abbaslearning.royasoftware.com/todos')
// }, 180000)

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
// var port = isProduction ? 3000 : 8081

var port = (process.env.PORT || actions.port)

app.listen(port, function(error) {
  if (error)
    throw error
  console.log('Express server listening on port', port)
})

// const server = http.createServer(app);

// server.listen(8080);
// server.on('listening', () => {
//   console.log('Listening on 8080');
// });