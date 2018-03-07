import React from 'react'
import AppImage from 'components/shared/appimage'

require('./admintraininglistitem.scss')

export default class AdminTrainingListItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isEditing: false
        }
    }

    componentDidMount() {
        componentHandler.upgradeDom()
    }

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
            <div className='mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                <div className='mdl-grid mdl-grid--no-spacing blockborder admintrainingslistitem'>
                    <div className='mdl-cell mdl-cell--1-col mdl-cell--1-col-tablet mdl-cell--1-col-phone'>
                        <AppImage ref='uploadcomp' api='training' imgid={trainingid} isUploading={isUploading}/>
                    </div>
                    <div className='mdl-cell mdl-cell--11-col mdl-cell--7-col-tablet mdl-cell--3-col-phone'>
                        <h4>{title}</h4>
                        <h5>{secondaryTitle}</h5>
                    </div>
                    <hr/>
                    <div
                        className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone ellipsis multiline shortdescription'>{shortDescription}</div>
                    <hr/>
                    <div className='mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
                        <span className='promo'>20%</span>
                    </div>
                    <div className='mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone'>
                        <div className='buttonwrap'>
                            <button
                                className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton'
                                onClick={this.handleEdit.bind(this)}>
                                <span className='glyphicon glyphicon-edit'/>
                            </button>
                            <button
                                className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton'
                                onClick={this.handleSchedule.bind(this)}>
                                <span className='glyphicon glyphicon-calendar'/>
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


