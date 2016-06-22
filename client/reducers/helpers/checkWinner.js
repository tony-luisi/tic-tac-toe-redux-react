const winnerConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
const tokenOne = "X", tokenTwo = "O"
const tokenOneWinner = tokenOne + tokenOne + tokenOne
const tokenTwoWinner = tokenTwo + tokenTwo + tokenTwo

export default (board) => {
  var winner = {}
  winnerConditions.map((set) => {
    const currentCellContents = board[set[0]].content + board[set[1]].content + board[set[2]].content
    console.log(currentCellContents)
    if (currentCellContents === tokenOneWinner) {
      winner = {
        gameWon: true,
        winner: "Player One!"
      }
    }
    else if (currentCellContents === tokenTwoWinner) {
      console.log('winner')
      winner = {
        gameWon: true,
        winner: "Player Two!"
      }
    }
  })
  return winner
}
