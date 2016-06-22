import createBoard from './helpers/createBoard'

const INITIAL_STATE = {
  board: createBoard(9)
}

export default (state = INITIAL_STATE, action) => {
  return state
}
