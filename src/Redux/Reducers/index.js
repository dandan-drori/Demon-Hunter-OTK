import { combineReducers } from 'redux'

const modal = (state = { isModalOpen: false, nextModal: 1 }, { type, payload }) => {
	switch (type) {
		case 'TOGGLE_MODAL':
			return { ...state, isModalOpen: !payload }
		case 'OPEN_MODAL':
			return { ...state, isModalOpen: true }
		case 'CLOSE_MODAL':
			return { ...state, isModalOpen: false }
		case 'NEXT_MODAL':
			return { ...state, nextModal: ++payload }
		default:
			return state
	}
}
const reducer = combineReducers({ modal })

export default reducer
