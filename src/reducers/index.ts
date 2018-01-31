import { combineReducers } from 'redux'
import counter from './counter.reducer'
import { Store } from '@types'

export default combineReducers<Store>({ counter })
