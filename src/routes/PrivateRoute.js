import React, {useContext} from 'react';
import {GlobalContext} from '../helper/context/Provider';
import {Route, Redirect} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({children, ...rest}) {
	const {state} = useContext(GlobalContext);
	const {user} = state;
	return (
		<Route
			{...rest}
			render={({location}) =>
				user ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: {from: location},
						}}
					/>
				)
			}
		/>
	);
}
