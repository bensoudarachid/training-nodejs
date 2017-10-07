import {browserHistory} from 'react-router'
import {getIsFetching} from './rootreducer'
import Immutable from 'immutable'
import cookie from 'react-cookie'
import todoactions from './todos/todoactions'
import trainingactions from './trainings/trainingactions'
import authservices from './app/authentication/authservices'
import todoservices from './todos/todoservices'
import trainingservices from './trainings/trainingservices'
import authactions from './app/authentication/authactions'
import appactions from './app/appactions'


const dateFormat = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/

// JSON.dateParser= function(key, value) {
//     console.log('JSON test reviver ky=' + require('util').inspect(key, false, null) + ', value=' + require('util').inspect(value, false, null))
//     // if (key == 'start' || key == 'end') {
//     //     // console.log('reviver key=' + require('util').inspect(key, false, null))
//     //     // console.log('reviver value=' + require('util').inspect(value, false, null))
//     //     return new Date(value)
//     // } else {
//     //     return value
//     // }
//
//     if (typeof value === "string" && dateFormat.test(value)) {
//         console.log('JSON reviver key='+require('util').inspect(key, false, null))
//         console.log('JSON reviver value='+require('util').inspect(value, false, null))
//
//         return new Date(value)
//     }
//     return value
// }
//
// JSON.parseWithDate = function(json) {
//     /// <summary>
//     /// Wrapper around the JSON.parse() function that adds a date
//     /// filtering extension. Returns all dates as real JavaScript dates.
//     /// </summary>
//     /// <param name="json" type="string">JSON to be parsed</param>
//     /// <returns type="any">parsed value or object</returns>
//     var parse = JSON._parseSaved ? JSON._parseSaved : JSON.parse;
//     try {
//         var res = parse(json, JSON.dateParser);
//         return res;
//     } catch (e) {
//         // orignal error thrown has no error message so rethrow with message
//         throw new Error("JSON content could not be parsed");
//     }
// }
//
// JSON.useDateParser = function(reset) {
//     /// <summary>
//     /// Globally enables JSON date parsing for JSON.parse().
//     /// replaces the default JSON parser with parse plus dateParser extension
//     /// </summary>
//     /// <param name="reset" type="bool">when set restores the original JSON.parse() function</param>
//
//     // if any parameter is passed reset
//     if (typeof reset != "undefined") {
//         if (JSON._parseSaved) {
//             JSON.parse = JSON._parseSaved;
//             JSON._parseSaved = null;
//         }
//     } else {
//         if (!JSON.parseSaved) {
//             JSON._parseSaved = JSON.parse;
//             JSON.parse = JSON.parseWithDate;
//         }
//     }
// }

let actions = {
<<<<<<< HEAD
    // apiurl:url,
    // port:port,
    // appbasename:appbasename,
    ...authservices,
    ...todoservices,
    ...trainingservices,
    ...appactions,
    ...authactions,
    // ...registeractions,
    ...todoactions,
    ...trainingactions
=======
// apiurl:url,
// expressPort:expressPort,
// appbasename:appbasename,
    ...
        authservices,
    ...
        todoservices,
    ...
        trainingservices,
    ...
        appactions,
    ...
        authactions,
// ...registeractions,
<<<<<<< HEAD
...
todoactions,
...
trainingactions
>>>>>>> 6e3ff02... webstorm big changes crash
=======
    ...
        todoactions,
    ...
        trainingactions
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
}

// JSON.useDateParser()

export default actions