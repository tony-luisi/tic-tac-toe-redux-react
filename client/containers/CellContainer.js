import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { playerTurn } from '../actions'

import Cell from '../components/Cell'


const mapDispatchToProps = (dispatch) => {
  return {
    playerTurn: bindActionCreators(playerTurn, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Cell)
