import reducer from '../counter.reducer'
import { increment } from '@actions'

describe('Counter Reduer', () => {
  it('should return default state', () => {
    expect(reducer(0, { type: '' })).toBe(0)
  })

  it('should increment', () => {
    expect(reducer(0, increment())).toBe(1)
  })

  it('should increment without using initial state', () => {
    expect(reducer(undefined, increment())).toBe(1)
  })
})
