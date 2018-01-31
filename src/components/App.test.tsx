import React from 'react'
import { Provider } from 'react-redux'
import { create } from 'react-test-renderer'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import ConnectedApp, { App } from './App'

const store = configureMockStore()({ counter: 0 })

it('it should work', () => {
  const tree = create(
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should just render', () => {
  const wrapper = shallow(<App counter={0} increment={jest.fn()} />)
  expect(wrapper.find('h1').text()).toBe('0 new react projects')
})
