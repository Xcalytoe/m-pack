/* eslint-disable react/prop-types */
import React, {createContext, useReducer, useState, useEffect} from 'react';
import rootReducer from './reducers';
import {initialAuthState} from './reducers/authReducer';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {LOGIN_SUCCESS} from './actionsType/actiontypes';
import {generateUserDocument} from '../../firebase/firebaseConfig';

export const GlobalContext = createContext();

export const GlobalProvider = props => {
	const initialState = {...initialAuthState};
	const [state, dispatch] = useReducer(rootReducer, initialState);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, async user => {
			if (user) {
				const data = await generateUserDocument(user, {});
				// Dispatch user's info
				dispatch({
					type: LOGIN_SUCCESS,
					payload: data,
				});
				setLoading(false);
				// ...
			} else {
				// User is signed out
				setLoading(false);
			}
		});
	}, []);
	return (
		<GlobalContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{!loading && props.children}
		</GlobalContext.Provider>
	);
};
