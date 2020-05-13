import axios from 'axios'

import { getAccessToken } from '../pages/auth/auth'
const [REQUEST, SUCCESS, FAILURE] = ['REQUEST', 'SUCCESS', 'FAILURE']
let isAxiosRequest = (action) => action.payload && action.payload.request


let isRefresingToken = false
let getAccessTokenPromise

function sendRequestAction(action, axiosClient, next) {
    const axiosAction = action
    let requestConfig = {...axiosAction.payload.request, reduxSourceAction: action}
    return axiosClient.request(requestConfig)
        .then(
            (response) => {
                const nextAction = {
                    type: axiosAction.type,
                    payload: response,
                    meta: {
                        previousAction: axiosAction
                    },
                    status: SUCCESS
                }
                next(nextAction)
                if(axiosAction.payload.onSuccess){
                    axiosAction.payload.onSuccess(response)
                }
                return response
            },
            (error) => {

                //error handle
                if(error.response && error.response.status === 401){
                    window.location.replace(window.location.origin + '/userForceLogout')
                    throw new Error('logout')
                }
                if(error.response && error.response.status === 403){
                    let message = error.response.data.message
                    if(message && message.toLowerCase().includes('unauthorized access')){
                        window.location.replace(window.location.origin + '/unauthorizedAccess')
                        throw new Error('Unauthorized Access')
                    }
                }
                const nextAction = {
                    type: axiosAction.type,
                    error: error,
                    meta: {
                        previousAction: axiosAction
                    },
                    status: FAILURE
                }
                next(nextAction)
                if(axiosAction.payload.onFail){
                    axiosAction.payload.onFail(error)
                }
                return Promise.reject(error)
            })
}

export default (clientMap, middlewareInterceptors) => {
	return (config) => (next) => (action) => {
		//console.log(action)
		if(!isAxiosRequest(action)) {
		    return next(action)
		} else {
			if (!isRefresingToken) {
	            getAccessTokenPromise = Promise.resolve(getAccessToken())
	        } 
	        let axiosClient = axios.create({
									baseURL: 'http://localhost:8081',
									responseType: 'json'
								})

            return getAccessTokenPromise.then(token => {
                action.payload.request.headers.Authorization = token
                return sendRequestAction(action, axiosClient, next)
            })
		}
	}
}