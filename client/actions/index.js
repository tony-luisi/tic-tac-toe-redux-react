import * as actions from '../constants/'

export function playerTurn(playerID, cellIndex) {
  return {
    type: actions.PLAYER_TURN,
    data: {
      playerID: playerID,
      cellIndex: cellIndex
    }
  }
}
