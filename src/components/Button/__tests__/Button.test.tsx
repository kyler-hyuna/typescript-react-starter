import React from 'react'
import { create } from 'react-test-renderer'
import Button from '../Button'

describe('Button', () => {
  it('should work', () => {
    const tree = create(<Buttontitle="I'm a button" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
