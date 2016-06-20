import React from 'react'

import ListOfAllThings from '../containers/ListOfAllThings'
import VisibleThingDetail from '../containers/VisibleThingDetail'

export default () => {
  return (
    <div>
      <h1>Things</h1>
      <ListOfAllThings />
      <VisibleThingDetail />
    </div>
  )
}
