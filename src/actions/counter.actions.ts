import * as constants from '../constants'

export interface IncrementAction {
  type: string
}

export const increment = () => ({
  type: constants.INCREMENT,
})
