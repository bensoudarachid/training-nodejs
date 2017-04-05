
class ApiConnection {
  constructor() {
    var port = -12
    if (process.env.NODE_ENV === 'production')
      port=8082
    else
      port=8081
    var isBrowser = typeof window !== 'undefined'
    var url = ''
    var authurl = ''
	// const appbasename = '/reactor'
    const appbasename = ''
    if( isBrowser ){
      if( window.location.hostname=='rlearn.herokuapp.com')
        authurl= window.location.protocol+'//abbaslearning.royasoftware.com:8083'
      else
        authurl= window.location.protocol+'//'+window.location.hostname+':8083'
      // url = authurl
//      console.log('services call url '+url)
    }else{
      authurl= undefined
      // url = 'http:'+'//'+'127.0.0.1'+(port ? ':'+port: '')+appbasename
      console.log('services call local url. we dont have that because we need a subdomain')
    }
    url = authurl
    this.apiurl = url
    this.port=port
    this.appbasename=appbasename
  }
  getApiConnection(hostname){
    if( hostname=='rlearn.herokuapp.com')
      return 'http://abbaslearning.royasoftware.com:8083'
    else
      return 'http://'+hostname+':8083'
    // return 'http://127.0.0.1:8083' //not helpful to resolve single tenants on server side calls
  }
}

export default (new ApiConnection)
