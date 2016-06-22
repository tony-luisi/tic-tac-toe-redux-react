import * as actions from '../constants/'

export function playerTurn(cellIndex) {
  return {
    type: actions.PLAYER_TURN,
    text: cellIndex
  }
}
