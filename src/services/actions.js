import {getIsFetching} from './rootreducer'
import todoactions from './todos/todoactions'
import trainingactions from './trainings/trainingactions'
import authservices from './app/authentication/authservices'
import todoservices from './todos/todoservices'
import trainingservices from './trainings/trainingservices'
import authactions from './app/authentication/authactions'
import appactions from './app/appactions'
import appservices from './app/appservices'

const dateFormat = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/

let actions = {
<<<<<<< HEAD
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
=======
>>>>>>> f886b1f... clean code, remove console logs
    ...appservices,
    ...authservices,
    ...todoservices,
    ...trainingservices,
    ...appactions,
    ...authactions,
<<<<<<< HEAD
// ...registeractions,
<<<<<<< HEAD
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
=======
=======
>>>>>>> f886b1f... clean code, remove console logs
    ...todoactions,
    ...trainingactions
>>>>>>> 79912c6... Fetch Tenant logo and name from back end. right display of tenant name if it s composed of 1 or two parts
}

export default actions