import * as Types from '../constants/actionTypes'
import * as R from 'ramda'
import { login } from './common'

export function account(state = {
	data: {},
	status: '',
}, action) {
	let { type } = action
	switch (type) {
		case Types.LOGIN: 
			return R.merge(state, {name: 'xialing'})
		default: return state
	}
}