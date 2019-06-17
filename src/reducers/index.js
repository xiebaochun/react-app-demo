import { combineReducers } from 'redux'
import { account } from './user'
import { reducer as reduxFormReducer } from 'redux-form'
export default combineReducers({
	account,
	form: reduxFormReducer,
})
