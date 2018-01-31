import { IncrementAction } from '@actions'
import { INCREMENT } from '@constants'

const initialState: number = 0

export default (
  state: number = initialState,
  action: IncrementAction
): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    default:
      return state
  }
}
