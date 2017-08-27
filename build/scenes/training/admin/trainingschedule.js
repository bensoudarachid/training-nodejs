'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _fileuploadinput = require('../../../components/shared/fileuploadinput');

var _fileuploadinput2 = _interopRequireDefault(_fileuploadinput);

var _appimage = require('../../../components/shared/appimage');

var _appimage2 = _interopRequireDefault(_appimage);

var _bigcalendaredit = require('../../../components/shared/bigcalendaredit');

var _bigcalendaredit2 = _interopRequireDefault(_bigcalendaredit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import TrainingImage from '../shared/trainingimage'


// import FullCalendarEdit from '../../../components/shared/fullcalendaredit'
// import ConfirmationModal from './confirmationmodal'


// import _ from 'lodash'
var util = require('util');

if (process.env.BROWSER) {
    require('./trainingschedule.scss');
}

var TrainingSchedule = function (_React$Component) {
    _inherits(TrainingSchedule, _React$Component);

    function TrainingSchedule(props) {
        _classCallCheck(this, TrainingSchedule);

        var _this = _possibleConstructorReturn(this, (TrainingSchedule.__proto__ || Object.getPrototypeOf(TrainingSchedule)).call(this, props));

        _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);

        _this.state = {
            edittraining: undefined
        };

        return _this;
    }

    _createClass(TrainingSchedule, [{
        key: 'render',
        value: function render() {
            console.log('training schedule render!');
            var auth = this.props.auth;

            var training = this.props.trainingappmap.get('edittraining');
            // const confirmationActionFunction=this.props.trainingappmap.get('confirmationActionFunction')

            //    console.log('training edit render. training='+require('util').inspect(training, false, null))
            var id = training == undefined ? '' : training.get('id');
            console.log('###################################Training schedule render=' + require('util').inspect(id, false, null));

            if (!auth.get('isAuthenticated')) return _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Needs authentication'
                )
            );
            // else if( training==undefined )
            //   return (
            //     <span>
            //       <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap' style={{width:'55px',height:'55px'}}></span>
            //     </span>
            //   )
            else
                //<form onSubmit={(event) => this.handleClick(event)} noValidate>
                // <form action='/api/training/updatetraining' method="post" enctype="multipart/form-data">
                //<TrainingImage ref='uploadcomp' trainingid={id} isUploading={saving}/>
                //         <input className={'mdl-textfield__input '+disabled} ref='shortDescription' type='text' id='shortDescription' name='shortDescription' value={shortDescription} onChange={this.handleShortDescriptionChange.bind(this)} disabled={saving}/>
                // <TrainingImage ref='uploadcomp' trainingid={id} isUploading={saving}/>
                // key={'trainingeditform'+Math.random()}
                // key={'trainingimage'+Math.random()} ref='uploadcomp'
                //training={this.props.trainingappmap.get('edittraining')}
                // {confirmationActionFunction &&
                // <div>
                //   <ConfirmationModal training={training} actions={this.props.actions}/>
                // </div>
                // }
                {
                    var date1 = new Date(2001, 0, 2, 10, 30, 0, 0);
                    var date2 = new Date(2001, 0, 2, 12, 30, 0, 0);
                    date1.setDate(6);
                    date2.setDate(6);
                    date2.setHours(16);

                    var events = _immutable2.default.List([{
                        'id': 1,
                        'title': 'React 1',
                        // 'date': Date.now(),
                        'start': date1,
                        'end': date2
                        // 'allDay': true
                    }, {
                        'id': 2,
                        'title': 'React 2',
                        // 'date': Date.now(),
                        'start': new Date(2001, 0, 4, 14, 30, 0, 0),
                        'end': new Date(2001, 0, 4, 16, 30, 0, 0)
                        // 'allDay': true
                    }]);

                    return _react2.default.createElement(
                        'div',
                        { className: 'trainingschedule blockborder' },
                        _react2.default.createElement(_bigcalendaredit2.default, { events: events })
                    );
                }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.actions.loadEditTraining(undefined);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
            // console.log('this.props.location.pathname='+require('util').inspect(this.props.location.pathname, false, null))
            // if( !this.props.location.pathname=='trainings/item/new')
            TrainingSchedule.fetchData(this.props.actions, this.props.params);

            // TrainingEdit.fetchData(this.props.actions)
            // console.log('Training edit mounted.'+util.inspect( this.props.params, false, null))

            // const training=this.props.trainingappmap.get('edittraining')
            // if(process.env.BROWSER && this.props.app.get('previouslocation')!=undefined)
            // TrainingEdit.fetchData(this.props.actions,this.props.params)
            // return TrainingEdit.fetchData(this.props.actions,this.props.params)
            // return Promise.resolve(TrainingEdit.fetchData(this.props.actions,this.props.params))
        }

        //This is a necessary call when component is fetched on server side

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            componentHandler.upgradeDom();
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(actions, params, hostname) {
            // console.log('Training list fetch data for hostname='+require('util').inspect(hostname, false, null))
            // console.log('Training edit. get training! param = '+util.inspect( params.id, false, null))

            //The return is necessary. if not the fetching is not resolved properly on the server side!
            return actions.retrieveTrainingDispatcher(params, hostname);
            // return Promise.resolve(actions.retrieveTrainingDispatcher(params.id,hostname))
        }
    }]);

    return TrainingSchedule;
}(_react2.default.Component);

exports.default = TrainingSchedule;