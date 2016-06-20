import { SHOW_DETAILS, HIDE_DETAILS, ADD_THING } from './actions'

const INITIAL_STATE = {
  selectedThing: null,
  things: [{
    id: 1,
    name: 'Red thing'
  }]
}

export default (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case SHOW_DETAILS:
      return Object.assign({}, state, {
        selectedThing: action.id
      })
    case HIDE_DETAILS:
      return Object.assign({}, state, {
        selectedThing: null
      })
    case ADD_THING:
      // create copy of existing state
      const newState = Object.assign({}, state)
      newState.things = state.things.slice()

      // add new thing
      newState.things.push({
        id: state.things.length + 1,
        name: action.name
      })
      return newState
    // return Object.assign({}, state, {
    //   things: [
    //     ...state.things,
    //     {
    //       id: state.things.length + 1,
    //       name: action.name
    //     }
    //   ]
    // })
    default:
      return state
  }
}
