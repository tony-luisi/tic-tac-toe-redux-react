import React from 'react'

import ThingList from './ThingList'
import { showDetails } from '../actions'

export default React.createClass({
  getInitialState () {
    return this.props.store.getState()
  },

  componentWillMount () {
    this.props.store.subscribe(this.stateHasChanged)
  },

  render () {
    return (
      <div>
        <h1>Things</h1>
        <ThingList
          things={this.state.things}
          showDetails={this.showDetailsHandler} />
      </div>
    )
  },

  stateHasChanged () {
    this.setState(this.props.store.getState())
  },

  showDetailsHandler (id) {
    console.log('showing details for', id)
    this.props.store.dispatch(showDetails(id))
  }
})
