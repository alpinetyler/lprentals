import { combineReducers } from 'redux'

import user from './user'
import rental from './rental'

export default combineReducers({ user, rental })