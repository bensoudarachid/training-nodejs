import React from 'react'
import {Route, IndexRoute, Link, hashHistory, DefaultRoute, NotFoundRoute} from 'react-router'

import AdminTrainingApp from '../../scenes/training/admin/admintrainingapp'
// import TrainingEdit from '../../scenes/training/admin/trainingedit'

const trainingRoutes = (
    <Route path="trainings" getChildRoutes={(location, cb) => {
        cb(null, [
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            <Route path="item/:id" component={require('../../scenes/training/admin/trainingedit.js').default}/>,
            <Route path="item/:id/schedule"
                   component={require('../../scenes/training/admin/trainingschedule.js').default}/>,
            <Route path="item/new" component={require('../../scenes/training/admin/trainingedit.js').default}/>
<<<<<<< HEAD
=======
            <Route path="item/:id" component={require('../../scenes/training/admin/trainingedit.js').default} />,
            <Route path="item/:id/schedule" component={require('../../scenes/training/admin/trainingschedule.js').default} />,
            <Route path="item/new" component={require('../../scenes/training/admin/trainingedit.js').default} />
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
        ])
    }}>
        <IndexRoute component={AdminTrainingApp}/>
    </Route>
)
// const trainingRoutes = {
//   path: 'item/:id',
//   component: TrainingEdit
// } 

export default trainingRoutes
// <Route path="trainings">
//   <IndexRoute component={TrainingApp}/>
//   <Route path="item/:id" component={TrainingEdit} />
// </Route>
