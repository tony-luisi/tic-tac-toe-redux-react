import createBoard from './helpers/createBoard'
import * as actions from '../constants'

const INITIAL_STATE = {
  board: createBoard(9),
  playerOneTurn: true,
  playerOneScore: 0,
  playerTwoScore: 0
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actions.PLAYER_TURN:
      var updatedBoard = [].concat(state.board)
      updatedBoard[action.text].content = state.playerOneTurn ? "X" : "O"
      updatedBoard[action.text].completed = true
      return Object.assign({}, state, {
        board: updatedBoard,
        playerOneTurn: !state.playerOneTurn
      })
    default:
      return state
  }
}
