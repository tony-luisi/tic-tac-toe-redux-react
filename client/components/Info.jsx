import React from 'react'

export default (props) => (
  <div className='info'>
    <h2>Info</h2>
    <p>Player Turn: {props.playerOneTurn ? "Player One" : "Player Two"}</p>
    <p>Player One Score: {props.playerOneScore}</p>
    <p>Player Two Score: {props.playerTwoScore}</p>
  </div>
)
