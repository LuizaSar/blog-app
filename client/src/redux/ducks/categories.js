import axios from 'axios'

const initialState = {
	items: [],
	selectedItems: [],
	loading: false,
}

export default function categories(state = initialState, action) {
	switch (action.type) {
		case 'categories/load/start':
			return {
				...state,
				loading: true,
			}
		case 'categories/load/success':
			return {
				...state,
				items: action.payload,
				loading: false,
			}
		case 'add/category':
			return {
				...state,
				selectedItems: [...state.selectedItems, action.payload],
				items: state.items.filter((item) => item._id !== action.payload._id),
			}
		case 'remove/category':
			return {
				...state,
				selectedItems: state.selectedItems.filter(
					(selected) => selected._id !== action.payload._id
				),
				items: [...state.items, action.payload],
			}
		default:
			return state
	}
}

export const fetchCategories = () => {
	return async (dispatch) => {
		dispatch({
			type: 'categories/load/start',
		})
		axios
			.get('/categories')
			.then((response) => {
				dispatch({
					type: 'categories/load/success',
					payload: response.data,
				})
			})
			.catch((error) => {
				dispatch({
					type: 'categories/load/failure',
					payload: error.message,
				})
			})
	}
}

export function addCategory(item) {
	return {
		type: 'add/category',
		payload: item,
	}
}

export function removeCategory(item) {
	return {
		type: 'remove/category',
		payload: item,
	}
}
