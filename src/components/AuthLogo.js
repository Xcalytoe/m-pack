import React from 'react';
import {Link} from 'react-router-dom';

export default function AuthLogo() {
	return (
		<div className="auth-container__nav">
			<Link to="/" className="auth-container__logo">
				<div className="flex">
					<span className="auth-container__m-style">M</span>
					<span className="auth-container__pack">-pack</span>
				</div>
			</Link>
		</div>
	);
}
