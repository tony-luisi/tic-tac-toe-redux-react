import React from 'react'

import Header from './Header'
import Board from '../containers/BoardContainer'
import Info from '../containers/InfoContainer'

export default (props) => (
      <div className='app'>
        <Header />
        <Board />
        <Info />
      </div>
)
