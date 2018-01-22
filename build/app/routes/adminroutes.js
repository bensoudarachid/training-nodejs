'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _admintrainingapp = require('../../scenes/training/admin/admintrainingapp');

var _admintrainingapp2 = _interopRequireDefault(_admintrainingapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
    return c(require);
};

var adminRoutes = _react2.default.createElement(
    _reactRouter.Route,
<<<<<<< HEAD
    { path: 'admin',

        getChildRoutes: function getChildRoutes(location, cb) {
=======
    { path: 'admin'
        // getChildRoutes={(location, cb) =>
        //   {cb(null,
        //     [
        //       <Route path="todos" component={require('../../scenes/todo/todoapp').default} />,
        //       require('./trainingroutes.js').default
        //     ]
        //   )}
        // }

        , getChildRoutes: function getChildRoutes(location, cb) {
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            require.ensure([], function (require) {
                cb(null, [_react2.default.createElement(_reactRouter.Route, { path: 'todos', component: require('../../scenes/todo/todoapp').default }), require('./trainingroutes.js').default]);
            });
        }
<<<<<<< HEAD
    },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _admintrainingapp2.default })
);

exports.default = adminRoutes;
=======

    },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _admintrainingapp2.default })
);
// const trainingRoutes = {
//   path: 'item/:id',
//   component: TrainingEdit
// } 

exports.default = adminRoutes;

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
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
