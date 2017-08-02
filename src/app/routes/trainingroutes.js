import React from 'react'
import { Route, IndexRoute, Link, hashHistory, DefaultRoute,NotFoundRoute } from 'react-router'

import AdminTrainingApp from '../../scenes/training/admin/admintrainingapp'
// import TrainingEdit from '../../scenes/training/admin/trainingedit'

const trainingRoutes = (
    <Route path="trainings" getChildRoutes={(location, cb) => {
        cb(null, [
            <Route path="item/:id" component={require('../../scenes/training/admin/trainingedit.js').default} />,
            <Route path="item/:id/schedule" component={require('../../scenes/training/admin/trainingschedule.js').default} />,
            <Route path="item/new" component={require('../../scenes/training/admin/trainingedit.js').default} />
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
