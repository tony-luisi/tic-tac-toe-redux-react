import React from 'react'

import Header from './Header'
import BoardContainer from '../containers/BoardContainer'
import Info from './Info'

export default (props) => (
      <div className='app'>
        <Header />
        <BoardContainer />
        <Info />
      </div>
)
