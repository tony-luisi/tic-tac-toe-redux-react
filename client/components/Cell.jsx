import React from 'react'

export default (props) => (
  <div className="cell" onClick={()=> (props.completed ? '' : props.playerTurn(props.id))}>
    {props.content}
  </div>
)
