import { combineReducers } from 'redux'

import listings from './listings'
import pagination from './pagination'

export default combineReducers({
  listings,
  pagination
})
