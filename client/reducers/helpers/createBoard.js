export default (noOfCells) => {
  var board = []
  for (var i = 0; i < noOfCells; i++) {
    board.push({
      content: "-" //the initial content of the board is a dash
    })
  }
  return board
}
