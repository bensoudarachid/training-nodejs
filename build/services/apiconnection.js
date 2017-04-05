'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiConnection = function () {
  function ApiConnection() {
    _classCallCheck(this, ApiConnection);

    var port = -12;
    if (process.env.NODE_ENV === 'production') port = 8082;else port = 8081;
    var isBrowser = typeof window !== 'undefined';
    var url = '';
    var authurl = '';
    // const appbasename = '/reactor'
    var appbasename = '';
    if (isBrowser) {
      if (window.location.hostname == 'rlearn.herokuapp.com') authurl = window.location.protocol + '//abbaslearning.royasoftware.com:8083';else authurl = window.location.protocol + '//' + window.location.hostname + ':8083';
      // url = authurl
      //      console.log('services call url '+url)
    } else {
      authurl = undefined;
      // url = 'http:'+'//'+'127.0.0.1'+(port ? ':'+port: '')+appbasename
      console.log('services call local url. we dont have that because we need a subdomain');
    }
    url = authurl;
    this.apiurl = url;
    this.port = port;
    this.appbasename = appbasename;
  }

  _createClass(ApiConnection, [{
    key: 'getApiConnection',
    value: function getApiConnection(hostname) {
      if (window.location.hostname == 'rlearn.herokuapp.com') return 'http://abbaslearning.royasoftware.com:8083';else return 'http://' + hostname + ':8083';
      // return 'http://127.0.0.1:8083' //not helpful to resolve single tenants on server side calls
    }
  }]);

  return ApiConnection;
}();

exports.default = new ApiConnection();