import React from 'react'
import {Route,IndexRoute,Link,hashHistory,DefaultRoute,NotFoundRoute } from 'react-router'

import AdminTrainingApp from '../../scenes/training/admin/admintrainingapp'
// import TrainingEdit from '../../scenes/training/admin/trainingedit'

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

const adminRoutes = (
    <Route path="admin"
        // getChildRoutes={(location, cb) =>
        //   {cb(null,
        //     [
        //       <Route path="todos" component={require('../../scenes/todo/todoapp').default} />,
        //       require('./trainingroutes.js').default
        //     ]
        //   )}
        // }

        getChildRoutes={ (location, cb) => {
            require.ensure([], require => {
                    cb(null,
                        [
                            <Route path="todos" component={require('../../scenes/todo/todoapp').default} />,
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
// const trainingRoutes = {
//   path: 'item/:id',
//   component: TrainingEdit
// } 

export default adminRoutes




// getChildRoutes={(location, cb) => {cb(null, [
// 	require('./trainingroutes.js').default
// ])}}


//    getChildRoutes={ (location, cb) =>
//        {require.ensure([], require =>
//          {cb(null,
//            [
//              <Route path="todos" component={require('../../scenes/todo/todoapp').default} />,
//              require('./trainingroutes.js').default
//            ]
// )}
//        )}
//      }

