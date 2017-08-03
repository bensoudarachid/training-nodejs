import React from 'react'
//import { ThreeBounce } from 'better-react-spinkit'
import Immutable from 'immutable'

import TrainingListItem from './traininglistitem'
import PureRenderMixin from 'react-addons-pure-render-mixin'

if (process.env.BROWSER) {
    require('./traininglist.scss')
}

<<<<<<< HEAD
<<<<<<< HEAD
export default class TrainingList extends React.Component {
=======
export default
class TrainingList extends React.Component {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
export default class TrainingList extends React.Component {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
    constructor(props) {
        super(props)
        // console.log('training list. Mixin in constructor')
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
    }

    // getItems() {
    //   if (this.props.trainings) {
    //     return this.props.trainings.filter(
<<<<<<< HEAD
    //       (item) => 
=======
    //       (item) =>
>>>>>>> 6e3ff02... webstorm big changes crash
    //         item.get('completed') && this.props.filterclosed ||
    //         !item.get('completed') && this.props.filteropen
    //     )
    //     // console.log('training list get items. render items. Size = '+listtrainings.size)
    //   }
    //   return Immutable.List([])
    // }

    renderItems() {
        var items = this.props.trainings
        // const props = _.omit(this.props, 'trainings');
        // console.log('training list. render items. Size = '+items.size)

        return items.map(
            (training, index) => {
                // console.log('training list. index = '+index)
                return <TrainingListItem ind={index} training={training} actions={this.props.actions}/>
            }
        )
    }

    render() {
        return (
            // key={'traininglist'+Math.random()}
            <div className='traininglist'>
<<<<<<< HEAD
<<<<<<< HEAD
                {this.props.trainings == undefined ?
                    <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active'
                          style={{width: '55px', height: '55px'}}></span>
=======
                {this.props.trainings == undefined ?
                    <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active' style={{
                        width: '55px',
                        height: '55px'
                    }}></span>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    :
                    <div className='traininglistwrap mdl-grid mdl-grid--no-spacing'>
                        {this.renderItems()}
                    </div>
                }
<<<<<<< HEAD
=======
        {this.props.trainings == undefined ?
            <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active' style={{
                width: '55px',
                height: '55px'
            }}></span>
            :
            <div className='traininglistwrap mdl-grid mdl-grid--no-spacing'>
            {this.renderItems()}
            </div>
            }
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            </div>
        )
    }

    renderTest() {
        // console.log('Hi there from List. Props: '+this.props);
        return (
            <span></span>
        )
    }
}

