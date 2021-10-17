import {combineReducers} from '../../util';
import authReducer from './authReducer';

// Import userReducer from './userReducer'
// import authReducer from './authReducer'

export default combineReducers(
	authReducer,
	// UserReducer,
	// authReducer
);
