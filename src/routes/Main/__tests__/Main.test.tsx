import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { create } from 'react-test-renderer'
import Main from '../Main'

describe('Main', () => {
  it('should work', () => {
    const tree = create(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
