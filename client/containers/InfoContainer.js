import { connect } from 'react-redux'

import Info from '../components/Info'

const mapStateToProps = (state) => {
  return {
    playerOneTurn: state.playerOneTurn,
    playerOneScore: state.playerOneScore,
    playerTwoScore: state.playerTwoScore
  }
}

export default connect(mapStateToProps)(Info)
