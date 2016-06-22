import createBoard from './helpers/createBoard'

const INITIAL_STATE = {
  board: createBoard()
}

export default (state = INITIAL_STATE, action) => {
  return state
}
