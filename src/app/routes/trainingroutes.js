import React from 'react'
import {DefaultRoute, IndexRoute, NotFoundRoute, Route} from 'react-router'

import AdminTrainingApp from '../../scenes/training/admin/admintrainingapp'

const trainingRoutes = (
    <Route path="trainings" getChildRoutes={(location, cb) => {
        cb(null, [
            <Route path="item/:id" component={require('../../scenes/training/admin/trainingedit.js').default}/>,
            <Route path="item/:id/schedule"
                   component={require('../../scenes/training/admin/trainingschedule.js').default}/>,
            <Route path="item/new" component={require('../../scenes/training/admin/trainingedit.js').default}/>
        ])
    }}>
        <IndexRoute component={AdminTrainingApp}/>
    </Route>
)

export default trainingRoutes
