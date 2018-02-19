import React from 'react'
import Immutable from 'immutable'
// import TestUtils from 'react-addons-test-utils'
import TrainingEdit from 'scenes/training/admin/trainingedit'
import {expect} from 'chai'
import {shallow, mount, render, ReactWrapper} from 'enzyme'
import actions from 'services/actions'

import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import {bindActionCreators} from 'redux'
import {connect, Provider} from 'react-redux'
import rootReducer from 'services/rootreducer'

require('sinon-as-promised')
var sinon = require('sinon').sandbox.create()

import {describe, beforeEach, afterEach, it} from 'mocha'

describe('TrainingEdit', () => {
    let trainingappmap
    let auth
    // let stubcomponentDidMount
    it('checks fetchdata call and connection to redux store', async function () {
            // it('checks fetchdata call and connection to redux store', function() {

            sinon.stub(actions, 'retrieveTrainingService').resolves({
                status: 200,
                data: {
                    id: 5,
                    title: 'Training -------------------------------------Title',
                    secondaryTitle: 'Training -----------------------------Second Title',
                    shortDescription: 'Training ---------------------------Short desc',
                    longDescription: 'Training ----------------------------Long desc',
                }
            })
            // sinon.stub(TrainingEdit, 'fetchData').resolves()
            var initialState = {auth, trainingappmap}
            Object
                .keys(initialState)
                .forEach(key => {
                    initialState[key] = Immutable.fromJS(initialState[key])
                })

            console.log('OKKKK #######################  initialState=' + require('util').inspect(initialState, false, null))
            const logger = createLogger()

//This version is complaining these are no reducers
            // const rootReducer = combineReducers({
            //   ...auth,
            //   // app: undefined,
            //   // todoappmap: todoAppReducer,
            //   // todoappmap: undefined,
            //   ...trainingappmap
            //   // user: userReducer,
            //   // routing: undefined
            // })


            const mockStoreInitialized = createStore(rootReducer, initialState, applyMiddleware(thunk, logger))

            function mapStateToProps(state) {
                return state
            }

            function mapDispatchToProps(dispatch) {
                return {
                    actions: bindActionCreators(actions, dispatch) //we dont need to pass dispatch down anymore. actions are now wrapped
                }
            }

            var TrainingEditConn = connect(mapStateToProps, mapDispatchToProps)(TrainingEdit)

            var component = await
                mount(
                    // const component = mount(
//      <TrainingEdit trainingappmap={trainingappmap} auth={auth}/>
                    <Provider store={mockStoreInitialized}>
                        <TrainingEditConn params={{id: '5'}}/>
                    </Provider>
                )
            // await sleep(1500);
            component.update()
            component.update()
            component.update()
            component.update()
            // console.log('1. component='+require('util').inspect(component.html(), false, null))
            console.log('1. component=' + require('util').inspect(component.html(), false, null))
            // console.log('====================='+
            //   require('util').inspect(mockStoreInitialized.getState().trainingappmap.get('edittraining'), false, null))
            expect(mockStoreInitialized.getState().trainingappmap.get('edittraining').get('shortDescription')).to.contain('Training ---------------------------Short desc')
            expect(actions.retrieveTrainingService).to.have.property('callCount', 1)
            // component = await componentDidMount(
            // component.find('TrainingEdit').componentDidUpdate()
            component = render(
                <Provider store={mockStoreInitialized}>
                    <TrainingEditConn params={{id: '5'}}/>
                </Provider>
            )

            console.log('2. component=' + require('util').inspect(component.html(), false, null))

            // expect(component.find('TrainingEdit')).to.have.length(1)
            // expect(component.find('.mdl-textfield__input')).to.have.length(4)
            expect(component.html()).to.contain('Training -----------------------------Second Title')
            // expect(component.find('.mdl-spinner')).to.have.length(1)
            // console.log('component.find(TrainingEdit)='+require('util').inspect(component.find('TrainingEdit'), false, null))
        }
    )


    // it('calls fetchData on mount', function () {
    //   sinon.stub(TrainingEdit, 'fetchData')
    //   const component = mount(
    //     <TrainingEdit trainingappmap={trainingappmap} auth={auth}/>
    //   )
    //   expect(TrainingEdit.fetchData).to.have.property('callCount', 1)
    // })

    // it('contains at least 4 input fields and one field FileUploadInput', function () {

    //   const component = shallow(
    //     <TrainingEdit trainingappmap={trainingappmap} auth={auth}/>
    //   )
    //   expect(component.find('FileUploadInput')).to.have.length(1)
    //   expect(component.find('.mdl-textfield__input')).to.have.length(4)

    // })

    // it('reacts on title field changes by calling  by calling handleTitleChange', () => {
    //   sinon.stub(TrainingEdit.prototype, 'componentDidMount')
    //   const component = mount(
    //     <TrainingEdit trainingappmap={trainingappmap} auth={auth}/>
    //   )
    //   expect(TrainingEdit.prototype.componentDidMount).to.have.property('callCount', 1)

    //   const titleInput = component.find('#title')
    //   titleInput.simulate('change', {target: {value: 'The new Unit'}})
    //   // titleInput.simulate('change', { key: 'ArrowLeft' })
    //   titleInput.simulate('change', {target: {value: 'The new Unit2'}})
    //   expect(TrainingEdit.prototype.handleTitleChange).to.have.property('callCount', 2)
    // })

    // it('reacts on submit by calling handleSave', () => {
    //   sinon.stub(TrainingEdit.prototype, 'componentDidMount')
    //   const component = mount(
    //     <TrainingEdit trainingappmap={trainingappmap} auth={auth}/>
    //   )
    //   expect(TrainingEdit.prototype.componentDidMount).to.have.property('callCount', 1)

    //   var but = component.find('button')
    //   // var but = component.find('.mdl-button')
    //   expect(but).to.have.length(2)

    //   but.at(0).simulate('submit')
    //   expect(TrainingEdit.prototype.handleSave).to.have.property('callCount', 1)

    // })

    // it('reacts on delete by calling handleDelete', () => {
    //   sinon.stub(TrainingEdit.prototype, 'componentDidMount')
    //   const component = mount(
    //     <TrainingEdit trainingappmap={trainingappmap} auth={auth}/>
    //   )
    //   expect(TrainingEdit.prototype.componentDidMount).to.have.property('callCount', 1)
    //   var but = component.find('button')
    //   expect(but).to.have.length(2)
    //   but.at(1).simulate('click')
    //   expect(TrainingEdit.prototype.handleDelete).to.have.property('callCount', 1)
    // })

    beforeEach(function () {
        // stubcomponentDidMount=sinon.stub(TrainingEdit.prototype, 'componentDidMount')
        auth = new Immutable.Map({
            isFetching: false,
            isRegistrationFetching: false,
            isAuthenticated: true,
            authority: 'ADMIN',
            registrationStep: 1,
            registrationError: {}
        })
        trainingappmap = new Immutable.Map({
            filterOpen: true,
            filterClosed: true,

            edittraining: new Immutable.Map({
                secondaryTitle: 'Abbas',
                shortDescription: 'Abbas ----------------------------------------------is short',
                longDescription: 'Abbas -----------------------------------------------is long',
                duration: 12,
            }),
            // loadTrainingImages: false,
            trainings: undefined,//Immutable.List([])
            trainingEditError: Immutable.Map({}),
            isTrainingEditFetching: false
        })
        sinon.stub(TrainingEdit.prototype, 'handleSave')
        sinon.stub(TrainingEdit.prototype, 'handleDelete')
        sinon.stub(TrainingEdit.prototype, 'handleTitleChange')
        // sinon.stub(TrainingEdit.prototype, 'componentDidMount')
        // sinon.stub(TrainingEdit, 'fetchData')
        Object
            .keys(auth)
            .forEach(key => {
                auth[key] = Immutable.fromJS(auth[key])
            })
        Object
            .keys(trainingappmap)
            .forEach(key => {
                trainingappmap[key] = Immutable.fromJS(trainingappmap[key])
            })

    })

    // Object
    //     .keys(initialState)
    //     .forEach(key => {
    //       initialState[key] = Immutable.fromJS(initialState[key])
    //     })

    afterEach(function () {
        sinon.restore()
    })

})

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}
