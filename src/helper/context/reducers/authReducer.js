import {
	LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS,
	REG_ERROR, REG_LOADING, REG_SUCCESS,
	SIGNOUT_SUCCESS, SIGNOUT_LOADING, SIGNOUT_ERROR,
	RESET_PASS_LOADING, RESET_PASS_SUCCESS, RESET_PASS_ERROR,
} from '../actionsType/actiontypes';

export const initialAuthState = {
	loading: false,
	user: null,
	authError: null,
	loginError: null,
	passReset: null,
	passResetErr: null,
};
// eslint-disable-next-line default-param-last
const auth = (state = initialAuthState, action) => {
	const {type, payload} = action;
	switch (type) {
		case REG_LOADING:
		case LOGIN_LOADING:
		case SIGNOUT_LOADING:
			return {
				...state,
				loading: true,
				authError: null,
				loginError: null,
			};
		case REG_SUCCESS:
		case LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				authError: null,
				user: payload,
				loginError: null,
			};
		case REG_ERROR:
			return {
				loading: false,
				user: null,
				authError: payload,
				loginError: null,
			};
		case LOGIN_ERROR:
			return {
				loading: false,
				user: null,
				authError: null,
				loginError: payload,
			};
		case RESET_PASS_LOADING:
			return {
				...state,
				loading: true,
				passReset: null,
				user: null,
			};
		case RESET_PASS_SUCCESS:
			return {
				loading: false,
				passReset: payload,
			};
		case RESET_PASS_ERROR:
			return {
				loading: false,
				passResetErr: payload,
			};
		case SIGNOUT_ERROR:
			return {
				...state,
				loading: false,
				// User: payload,
				authError: payload,
				loginError: null,
			};
		case SIGNOUT_SUCCESS:
			return {
				loading: false,
				authError: null,
				user: payload,
			};

		default:
			return state;
	}
};

export default auth;
