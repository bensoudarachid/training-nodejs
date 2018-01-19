import React from 'react'
import AppImage from '../../../components/shared/appimage'

if (process.env.BROWSER) {
    require('./admintraininglistitem.scss')

}

<<<<<<< HEAD
<<<<<<< HEAD
export default class AdminTrainingListItem extends React.Component {
=======
export default
class AdminTrainingListItem extends React.Component {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
export default class AdminTrainingListItem extends React.Component {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
    constructor(props) {
        super(props)

        this.state = {
            isEditing: false
        }
    }

    componentDidMount() {
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
<<<<<<< HEAD
>>>>>>> 6e3ff02... webstorm big changes crash
        // this.loadImage()
    }

    // componentDidUpdate() {
<<<<<<< HEAD
    //   require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
    //   componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
    //   var dialogInputs = document.querySelectorAll('.mdl-textfield')
    //   for (var i = 0, l = dialogInputs.length; i < l; i++) {
    //     dialogInputs[i].MaterialTextfield.checkDirty()
    //   }
    // }

    // <button className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored schedulebutton'>
    //   <img src={'./images/Blog-CodingNeutral1.png'} alt='coding'/>
    // </button>
    // <span className='glyphicon glyphicon-upload '></span>
    // <img src={'../../../images/Blog-CodingNeutral1.png'} alt='coding'/>
    // isUploading={isUploading}
=======
    }

>>>>>>> b06ef94... clean code, remove comments
    render() {
        const title = this.props.training.get('title')
        const secondaryTitle = this.props.training.get('secondaryTitle') ? this.props.training.get('secondaryTitle') : ''
        const shortDescription = this.props.training.get('shortDescription') ? this.props.training.get('shortDescription') : ''
        const trainingid = this.props.training.get('id')
        var isUploading = this.props.training.get('isUploading')
        isUploading = isUploading == undefined ? false : true
        const duration = this.props.training.get('duration') ? this.props.training.get('duration') / 8 : '0'
        const onlydays = Math.round(duration)
        var dayString = ''
        if (onlydays < 2)
            dayString = ' day'
        else
            dayString = ' days'
        return (
            <div className='mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone'>
                <div className='mdl-grid mdl-grid--no-spacing blockborder admintrainingslistitem'>
                    <div className='mdl-cell mdl-cell--1-col mdl-cell--1-col-tablet mdl-cell--1-col-phone'>
                        <AppImage ref='uploadcomp' api='training' imgid={trainingid} isUploading={isUploading}/>
                    </div>
                    <div className='mdl-cell mdl-cell--11-col mdl-cell--7-col-tablet mdl-cell--3-col-phone'>
<<<<<<< HEAD
                        <h4>{title}</h4><h5>{secondaryTitle}</h5></div>
                    <hr/>
                    <div
                        className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone ellipsis multiline shortdescription'>{shortDescription}</div>
=======
                        <h4>{title}</h4>
                        <h5>{secondaryTitle}</h5>
                    </div>
                    <hr/>
<<<<<<< HEAD
                    <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone ellipsis multiline shortdescription'>{shortDescription}</div>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                    <div
                        className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone ellipsis multiline shortdescription'>{shortDescription}</div>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    <hr/>
                    <div className='mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
                        <span className='promo'>20%</span>
                    </div>
                    <div className='mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone'>
                        <div className='buttonwrap'>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                            <button className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored editbutton'
                                    onClick={this.handleEdit.bind(this)}>
                            </button>
                            <button
                                className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored schedulebutton'
                                onClick={this.handleSchedule.bind(this)}>
=======
                            <button className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored editbutton' onClick={this.handleEdit.bind(this)}>
                            </button>
                            <button className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored schedulebutton' onClick={this.handleSchedule.bind(this)}>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                            <button className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored editbutton'
=======
                            <button className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton'
>>>>>>> 711f559... Javascript request interceptor for header manipulation. Webpack source maps not showing in Devtools. Eliminate source maps on production build. Export 5 colors constants from scss into javascript for the bigcalendar. Add mdl-selectfield in project and use it for bigcalendar. Adapt mdl-selectfield label color. Fix calendar background event and rows background colors. Devtools workspace. Map files to original disk files and edit directly in chrome. Disable autosaving of webpack.config.js in webstorm/Settings/LanguagesFrameworks/Webpack/change file name to something inexistent. Enable auto synchronisation on file disk change in webstorm. better buttons with glyphicons and hover. Adapt app wide uniform round buttons with glyphicons. Change buttons to the new round buttons on admin training list items. Implement a JSON.parse polyfill to automatically transform dates from json to javascript date objects. Bug fix. state Hydratation is not properly JSON date parsed. Need to stringify and parse again.Problem fix. Eveything landing in redux by state hydratation is deeply immutable Lists and Maps due to Immutable.fromJS. But we need a immutable list of simple Javascript events for BigCalendar: We add a new store element for this in trainingappmap: edittrainingevents.
                                    onClick={this.handleEdit.bind(this)}>
=======
                            <button
                                className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton'
                                onClick={this.handleEdit.bind(this)}>
>>>>>>> b06ef94... clean code, remove comments
                                <span className='glyphicon glyphicon-edit'/>
                            </button>
                            <button
                                className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton'
                                onClick={this.handleSchedule.bind(this)}>
<<<<<<< HEAD
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
=======
                                <span className='glyphicon glyphicon-calendar'/>
>>>>>>> 711f559... Javascript request interceptor for header manipulation. Webpack source maps not showing in Devtools. Eliminate source maps on production build. Export 5 colors constants from scss into javascript for the bigcalendar. Add mdl-selectfield in project and use it for bigcalendar. Adapt mdl-selectfield label color. Fix calendar background event and rows background colors. Devtools workspace. Map files to original disk files and edit directly in chrome. Disable autosaving of webpack.config.js in webstorm/Settings/LanguagesFrameworks/Webpack/change file name to something inexistent. Enable auto synchronisation on file disk change in webstorm. better buttons with glyphicons and hover. Adapt app wide uniform round buttons with glyphicons. Change buttons to the new round buttons on admin training list items. Implement a JSON.parse polyfill to automatically transform dates from json to javascript date objects. Bug fix. state Hydratation is not properly JSON date parsed. Need to stringify and parse again.Problem fix. Eveything landing in redux by state hydratation is deeply immutable Lists and Maps due to Immutable.fromJS. But we need a immutable list of simple Javascript events for BigCalendar: We add a new store element for this in trainingappmap: edittrainingevents.
                            </button>
                        </div>
                    </div>
                    <div className='mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
                        <span className='duration'>{duration + '' + dayString}</span>
                    </div>
                </div>
            </div>
        )
    }

    handleEdit(event) {
        window.routerHistory.push('/admin/trainings/item/' + this.props.training.get('id'))
    }

    handleSchedule(event) {
        console.log('Call Edit for this Training' + this.props.training.get('id'))
        window.routerHistory.push('/admin/trainings/item/' + this.props.training.get('id') + '/schedule')

    }

}


