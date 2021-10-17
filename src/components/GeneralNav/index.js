import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import style from './nav.module.scss';
import {GlobalContext} from '../../helper/context/Provider';
import {signOutUser} from '../../helper/context/action/authActions';

export default function GeneralNav() {
	const {state, dispatch} = useContext(GlobalContext);
	const {user} = state;
	const signOut = () => {
		signOutUser()(dispatch);
	};

	return (
		<header className={style.header}>
			<div className={`flex ${style.header__flex} main-container`}>
				<Link to="/" className={style.logo}>
					<div className="flex">
						<span className={style.m_style}>M</span>
						<span className={style.pack}>-Pack</span>
					</div>
				</Link>
				<nav className={`${style.colGap} flex`}>
					<Link to="/ecommerce/shop">Ecommerce</Link>
					<Link to="/weather">Weather</Link>
					<Link to="/blog/posts">Blog</Link>
				</nav>
				<div className={`${style.colGap} flex`}>
					{user ? (
						<>
							<Link to="/dashboard">Dashboard</Link>
							<Link onClick={signOut} to="/">
                Sign out
							</Link>
						</>
					) : (
						<>
							<Link to="/register">Register</Link>
							<Link to="/login">Login</Link>
						</>
					)}
				</div>
			</div>
		</header>
	);
}
