const INITIAL_STATE = {
  showingDetailId: null,
  things: [{
    id: 1,
    name: 'red thing'
  }, {
    id: 2,
    name: 'blue thing'
  }]
}

export default (state = INITIAL_STATE , action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case 'SHOW_DETAILS':
      newState.showingDetailId = action.id
  }
  return newState
}
