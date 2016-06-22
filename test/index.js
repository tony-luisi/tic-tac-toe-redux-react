import test from 'ava'
import React from 'react'
import { shallow, render, mount } from 'enzyme'

import App from '../client/components/App'
import Header from '../client/components/Header'

// Components

test('<App />', t => {
  const expected = 'Tic Tac Toe'
  const wrapper = render(React.createElement(App))
  t.is(wrapper.find('Header').text(), expected)
})

test('<Header />', t => {
  const expected = 'Tic Tac Toe'
  const wrapper = shallow(React.createElement(Header))
  t.is(wrapper.find('h1').text(), expected)
})

// Reducers
