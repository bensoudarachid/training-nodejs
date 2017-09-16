const version = require('./version.js')
var apiport = 8088 // default for development

class ApiConnection {
    constructor() {
        console.log('version=' + require('util').inspect(version, false, null))

        var expressPort = -12
        var appbasename = ''
        if (process.env.NODE_ENV === 'production') {
            expressPort = 8082
            // appbasename = '/training-' + version.appversion
        }
        else {
            expressPort = 8081
            // appbasename = '/training-'+version.appversion
        }
        var isBrowser = typeof window !== 'undefined'

        if (process.env.NODE_ENV === 'production') {
            if (isBrowser && window.location.protocol == 'https:') // both the same: isBrowser in production means also window.location.protocol has to be == 'https:'
<<<<<<< HEAD
                apiport = 9083 //Apache cluster ssl port
<<<<<<< HEAD
            else //the node server wants to call apache 
=======
            else //the node server wants to call apache
>>>>>>> 6e3ff02... webstorm big changes crash
                apiport = 8088 //Apache cluster normal port
=======
                // apiport = 9083 //Apache cluster ssl expressPort
                apiport = 443 //Apache cluster ssl expressPort
            else //the node server wants to call apache
<<<<<<< HEAD
<<<<<<< HEAD
                // apiport = 8088 //Apache cluster normal expressPort
                apiport = 80 //Apache cluster normal expressPort
>>>>>>> 391471a... adapt ports for openshift
=======
                apiport = 8088 //Apache cluster normal expressPort
=======
                apiport = 80 //Apache cluster normal expressPort
>>>>>>> 31fe258... Fix http port problem for production
                // apiport = 80 //Apache cluster normal expressPort
>>>>>>> dcab90a... Try to solve local calls from node.js to spring rest api in openshift
        }

        var url = ''
        var authurl = ''
        // const appbasename = '/reactor'
        // const appbasename = version.
        if (isBrowser) {
            console.log('APIConnection. Window.location.protocol=' + require('util').inspect(window.location.protocol, false, null))

            // if( window.location.protocol == 'https:' )
            //   apiport = 9083
            // else
            //   apiport = 8083
            // if (window.location.hostname == 'rlearn.herokuapp.com')
            // // authurl= window.location.protocol+'//reactlearning.royasoftware.com:'+apiport
            //     authurl = window.location.protocol + '//reactlearning.school.royasoftware.com:' + apiport
            // else
            const apiHostname = window.location.hostname .replace("school.", "schoolapi.");
            authurl = window.location.protocol + '//' + apiHostname + ':' + apiport
            // authurl = window.location.protocol + '//' + '127.0.0.1' + ':' + apiport
            // url = authurl
            console.log('services call url ' + url)
        } else {
            authurl = undefined
            // url = 'http:'+'//'+'127.0.0.1'+(expressPort ? ':'+expressPort: '')+appbasename
            console.log('services call local url. we dont have that because we need a subdomain')
        }
        url = authurl
        this.apiurl = url
        this.expressPort = expressPort
        this.appbasename = appbasename
        // this.apiport=apiport
    }

    getApiConnection(hostname) {
        console.log('process.env.TRAINING_API_LOCAL_IP='+require('util').inspect(process.env.TRAINING_API_LOCAL_IP, false, null))
        if (!process.env.BROWSER && process.env.TRAINING_API_LOCAL_IP!=undefined) {
            hostname = process.env.TRAINING_API_LOCAL_IP;
            console.log('hostname='+require('util').inspect(hostname, false, null))
        }else
        // const apiHostname = hostname.replace("school.", "schoolapi.");
            hostname = hostname.replace("school.", "schoolapi.");
        console.log('2. Get Api connection: '+'http://' + hostname + ':' + apiport)

        return 'http://' + hostname + ':' + apiport
        // return 'http://' + '127.0.0.1' + ':' + apiport
        // }
        // return 'http://127.0.0.1:8083' //not helpful to resolve single tenants on server side calls
    }
}

export default (new ApiConnection)
