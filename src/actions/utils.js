import * as R from 'ramda'
import * as auth from '../pages/auth/auth'

export function getDefaultHeaders() {
	let headers = {
		'Authorization': auth.getAccessToken() ? auth.getAccessToken() : '',
	}
	return headers
}