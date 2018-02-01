import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { create } from 'react-test-renderer'
import App from '../app'

describe('Main', () => {
  it('should work', () => {
    const tree = create(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
