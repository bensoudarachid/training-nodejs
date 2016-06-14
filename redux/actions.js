let actions = {
  addTodo: function(text) {
    console.log('actions. AddTodo')
    return {
      type: 'ADD_TODO',
      text: text
    }
  },

  saveTodo: function(id, text) {
    console.log('actions. SaveTodo')
    return {
      type: 'SAVE_TODO',
      id: id,
      text: text
    }
  },

  completeTodo: function(id) {
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },

  deleteTodo: function(id) {
    return {
      type: 'DELETE_TODO',
      id: id
    }
  },

  createNewUserId: function() {
    return {
      type: 'CREATE_USER_ID',
      id: Math.round(Math.random() * 100)
    }
  },

  createNewUserIdIfOdd: function() {
    return (dispatch, getState) => {
      const { user } = getState()
      if (user.id % 2 === 0) {
        return
      }
      dispatch(actions.createNewUserId())
    }
  },

  createNewUserIdAsync: function() {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(actions.createNewUserId())
      }, 2500)
    }
  }
}

export default actions
