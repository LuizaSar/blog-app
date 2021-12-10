import axios from 'axios'

const initialState = {
	username: '',
	password: '',
	email: '',
	loading: false,
	error: false,
	errorMessage: '',
}

export default function registration(state = initialState, action) {
	switch (action.type) {
		case 'registration/start':
			return {
				...state,
				loading: true,
				error: false,
			}
		case 'registration/success':
			return {
				...state,
				username: action.payload.username,
				email: action.payload.email,
				password: action.payload.password,
				loading: false,
				error: false,
			}
		case 'registration/failure':
			return {
				...state,
				error: true,
				loading: false,
				errorMessage: action.payload,
			}
		default:
			return state
	}
}

export const register = (username, password, email) => {
	return async (dispatch) => {
		dispatch({
			type: 'registration/start',
		})
		axios
			.post('/auth/register', {
				username,
				password,
				email,
			})
			.then((response) => {
				dispatch({
					type: 'registration/success',
					payload: response.data,
				})
			})
			.catch((error) => {
				console.log(error.response)
				dispatch({
					type: 'registration/failure',
					payload: error.response.data,
				})
			})
	}
}
