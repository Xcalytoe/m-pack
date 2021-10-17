import React, {useContext} from 'react';
import {GlobalContext} from '../../helper/context/Provider';
import {Link} from 'react-router-dom';

export default function Dashboard() {
	const {state /* dispatch */} = useContext(GlobalContext);
	const {/* loginError, loading, */ user} = state;
	return (
		<div>
			<div>
				<Link to="/">Home</Link>
        &nbsp;
				<button>sign out</button>
			</div>

			{JSON.stringify(user)}
		</div>
	);
}
