// import _ from 'lodash'
import Immutable from 'immutable'

// import cookie from 'react-cookie'
require('es6-promise').polyfill()
require('isomorphic-fetch')


// function getId(trainings) {
//   return trainings.reduce((maxId, training) => {
//       return Math.max(training.get('id'), maxId)
//     }, -1) + 1
// }

// function getFilteredItems(trainings,filteropen,filterclosed) {
//     if (trainings) {
//       return trainings.filter(
//         (item) => { 
//             console.log('*****************')
//             // console.log('title '+item.get('title')+' is completed 1: '+item.get('completed') +' passing? '+
//             //     (item.get('completed') === 'true' && this.props.filter === 'closed')) 
//             // console.log('title '+item.get('title')+' is not completed: '+ !item.get('completed')  +'. Filter: '+this.props.filteropen+'. Passing? '+
//             //     !(item.get('completed')  && this.props.filterclosed ) )
//             return item.get('completed') && filterclosed  ||
//                 !item.get('completed') && filteropen 
//         }
//         // (item) => item.get('completed') === 'true' && this.props.filter === 'closed' ||
//         //   item.get('completed') === 'false' && this.props.filter === 'open' ||
//         //   this.props.filter === 'all'
//       );
//     }
//     return Immutable.List([]);
//   }

let trainingReducer = function(trainingappmap = new Immutable.Map({
  // loadTrainingImages: false,
  trainings: Immutable.List([])
}), action) {
  // let trainingReducer = function(trainingappmap = new Immutable.Map({}), action) {
  // console.log('Training reducer. is Map ' + (trainingappmap instanceof Immutable.Map) )
  if (!(trainingappmap instanceof Immutable.Map)) {
    console.log('Training reducer. Init Map. Need to find out why it s not a map')
    trainingappmap = new Immutable.Map({
      filterOpen: true,
      filterClosed: true,
      // loadTrainingImages: false,
      trainings: Immutable.List([])      
    })
  }
  // console.log('Training reducer. Filter open: ' + trainingappmap.get('filterOpen'))
  var trainings = trainingappmap.get('trainings')
  let index
  switch (action.type) {
  case 'CREATE_TRAINING_INIT':
      // console.log('training reducer. init create training : ')
      // console.log(action.training)
    trainingappmap = trainingappmap.set('trainings', trainings.push(action.training))
    return trainingappmap
  case 'LOADING_TRAINING':
    index = trainings.findIndex(function(item) {
      return item.get('id') === action.training.get('id')
    })
    training = action.training.set('loading', true)
    trainings = trainings.set(index, training)
    trainingappmap = trainingappmap.set('trainings', trainings)
    return trainingappmap
  case 'UPLOADING_TRAINING_IMAGE':
    index = trainings.findIndex(function(item) {
      return item.get('id') === action.training.get('id')
    })
    // console.log('trainingreducer uploading image. training index = '+index)
    var training = action.training.set('isUploading',action.isUploading)
    // console.log('trainingreducer uploading image: '+training.get('isUploading')+' action isUploading = '+action.isUploading)
    trainings = trainings.set(index, training)
    trainingappmap = trainingappmap.set('trainings', trainings)
    // console.log('trainingreducer uploading image. training isUploading from trainings = '+trainings.get(index).get('isUploading') )
    return trainingappmap
  // case 'FINISH_LOADING_TRAINING_FILE':
  //   trainingappmap = trainingappmap.set('loadTrainingImages', false)
  //   return trainingappmap

  case 'REJECT_TRAINING_INIT':
      // console.log('training reducer. reject create training : '+action.text)
      // console.log(action.text)
    trainings = trainings.filter(function(element) {
      return element !== action.representTraining
    })
    trainingappmap = trainingappmap.set('trainings', trainings)
    return trainingappmap
  case 'ADD_TRAINING':
    console.log('training reducer. add training : completed? ' + action.training.get('completed'))
      // console.log(action.training)
      // console.log('training reducer. add training, remove representant : ')
      // console.log(action.representTraining)
    index = trainings.findIndex(function(item) {
      return item === action.representTraining
    })
    trainings = trainings.set(index, action.training)
      // trainings = trainings.filter(function(element) {
      //   return element !== action.representTraining
      // }).push(action.training)
    trainingappmap = trainingappmap.set('trainings', trainings)
    return trainingappmap
  case 'TRAININGS_LOADED':
    
    trainingappmap = trainingappmap.set('trainings', Immutable.List(action.trainings.map((training) => {
      return Immutable.Map(training)
    })))
    // console.log('trainings reducer. trainings loaded '+trainingappmap.get('trainings').size )
    return trainingappmap
    // return action.trainings
  case 'SAVE_TRAINING':
    console.log('Training reducer. SaveTraining id=' + action.id + 'title = ' + action.text)
    trainingappmap = trainingappmap.set('trainings', trainings.map((training) => {
      return training.get('id') === action.id ?
          training.set('title', action.text)
          : training
    }))
    return trainingappmap
  case 'COMPLETE_TRAINING':
    trainingappmap = trainingappmap.set('trainings', trainings.map((training) => {
      return training.id === action.id ?
          Object.assign({}, training, {
            completed: !training.completed
          }) : training
    }))
    return trainingappmap

  case 'UPDATE_TRAINING':
    console.log('training reducer. update training : completed? ' + action.training.get('completed'))
    index = trainings.findIndex(function(item) {
      return item.get('id') === action.training.get('id')
    })
    trainingappmap = trainingappmap.set('trainings', trainings.set(index, action.training))
    trainingappmap = trainingappmap.set('loadTrainingImages', true)
    return trainingappmap
  // case 'UPDATE_TRAINING_FILE':
  //   console.log('training reducer. Upload file')
  //   trainingappmap = trainingappmap.set('loadTrainingImages', false)
  //   return trainingappmap
  case 'DELETE_TRAINING':
    trainingappmap = trainingappmap.set('trainings', trainings.filter((training) => {
      return training.get('id') !== action.id
    }))
    return trainingappmap
  // case 'FILTER_TRAININGS':
  //   trainingappmap = trainingappmap.set('trainings', trainings.filter((training) => {
  //     return action.filterTrainings === undefined || training.get('completed') && action.filterTrainings === 'closed' ||
  //         training.get('open') && action.filterTrainings === 'open'
  //   }))
  //   return trainingappmap
  // case 'FILTER_TRAININGS_OPEN':
  //   trainingappmap = trainingappmap.set('filterOpen', action.filterOpen)
  //   return trainingappmap
  // case 'FILTER_TRAININGS_CLOSED':
  //   trainingappmap = trainingappmap.set('filterClosed', action.filterClosed)
  //   return trainingappmap
  default:
    return trainingappmap

  }
}

export default trainingReducer
