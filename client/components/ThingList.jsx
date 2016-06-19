import React from 'react'

export default React.createClass({
  render () {
    const showDetails = this.props.showDetails
    return (
      <div className="thing-list">
        <h2>List</h2>
        <ul>
        {this.props.things.map((thing) => {
          return (
            <li key={thing.id}>
              <a href="#" onClick={() => showDetails(thing.id)}>{thing.name}</a>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
})
