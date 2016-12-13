


let appactions = {
  appError: function(error) {
    return {
      type: 'APP_ERROR',
      error
    }
  }
}

export default appactions