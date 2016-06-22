import React from 'react'
import Cell from '../containers/CellContainer'

export default (props) => (
  <div className='board'>
    {props.board.map((cell, i) => (
      <Cell key={i} id={i} content={cell.content} turn={props.playerTurn} completed={cell.completed}/>
    ))}
  </div>
)
