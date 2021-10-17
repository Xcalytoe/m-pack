import {OPEN_MODAL, OPEN_EDIT_MODAL} from '../actionsType/actiontypes';
export const initialState = {
	openModal: false,
	openEditModal: false,
};
// eslint-disable-next-line default-param-last
export const modal = (state = initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case OPEN_MODAL:
			return {
				...state,
				openModal: payload,
				openEditModal: false,
			};
		case OPEN_EDIT_MODAL:
			return {
				...state,
				openModal: false,
				openEditModal: payload,
			};
		default:
			return state;
	}
};
// Export default modal;
