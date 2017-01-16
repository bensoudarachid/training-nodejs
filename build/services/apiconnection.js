'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiConnection = function ApiConnection() {
  _classCallCheck(this, ApiConnection);

  var port = -12;
  if (process.env.NODE_ENV === 'production') port = 8082;else port = 8081;
  var isBrowser = typeof window !== 'undefined';
  var url = '';
  var authurl = '';
  // const appbasename = '/reactor'
  var appbasename = '';
  if (isBrowser) {
    authurl = window.location.protocol + '//' + window.location.hostname + ':8083';
    url = authurl;
    console.log('services call url ' + url);
  } else {
    url = 'http:' + '//' + '127.0.0.1' + (port ? ':' + port : '') + appbasename;
    authurl = 'http:' + '//' + '127.0.0.1' + ':8083';
    console.log('services call local url ' + url);
  }
  this.apiurl = url;
  this.port = port;
  this.appbasename = appbasename;
};

exports.default = new ApiConnection();