import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { playerTurn } from '../actions'

import Board from '../components/Board'

const mapStateToProps = (state) => {
  return {
    board: state.board
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playerTurn: bindActionCreators(playerTurn, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
