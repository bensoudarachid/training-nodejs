import React from 'react'
import {DefaultRoute, IndexRoute, NotFoundRoute, Route} from 'react-router'

import AdminTrainingApp from '../../scenes/training/admin/admintrainingapp'

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

const adminRoutes = (
    <Route path="admin"

           getChildRoutes={(location, cb) => {
               require.ensure([], require => {
                       cb(null,
                           [
                               <Route path="todos" component={require('../../scenes/todo/todoapp').default}/>,
                               require('./trainingroutes.js').default
                           ]
                       )
                   }
               )
           }
           }
    >
        <IndexRoute component={AdminTrainingApp}/>
    </Route>
)

export default adminRoutes





