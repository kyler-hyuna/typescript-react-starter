import React from 'react'
import { create } from 'react-test-renderer'
import { shallow } from 'enzyme'
import App from './App'

it('it should work', () => {
  const tree = create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should just render', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('h1').text()).toBe('0 new react projects')
})
