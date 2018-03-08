import { combineReducers } from 'redux'

import sample from './sampleReducer'
import listings from './listings'

export default combineReducers({
  sample,
  listings
})
