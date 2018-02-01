import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { create } from 'react-test-renderer'
import Next from '../Next'

describe('Main', () => {
  it('should work', () => {
    const tree = create(
      <MemoryRouter>
        <Next />
      </MemoryRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
