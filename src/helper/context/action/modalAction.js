import {OPEN_MODAL, OPEN_EDIT_MODAL} from '../actionsType/actiontypes';

export const openModal = () => async modalDispatch => {
	modalDispatch({
		type: OPEN_MODAL,
		payload: true,

	});// .catch((error) => {

	//   });
};

export const closePopModal = () => async modalDispatch => {
	modalDispatch({
		type: OPEN_MODAL,
		payload: false,
	});
};

export const openEditModal = () => async modalDispatch => {
	modalDispatch({
		type: OPEN_EDIT_MODAL,
		payload: true,

	});// .catch((error) => {

	//   });
};

export const closeEditModal = () => async modalDispatch => {
	modalDispatch({
		type: OPEN_EDIT_MODAL,
		payload: false,
	});
};
