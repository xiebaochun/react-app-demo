import * as Types from '../constants/actionTypes'
import * as R from 'ramda'
import { getDefaultHeaders } from './utils'

export function login(username, password, headers = {}) {
	return {
		type: Types.LOGIN,
		payload: {
			request: {
				method: 'post',
				url: `users/signin?username=${username}&password=${password}`,
				
				headers: R.merge(getDefaultHeaders(), headers),
				responseType: 'text'
			}
		}
	}
}