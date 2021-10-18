import React, {useState, useContext} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {resetPassword} from '../../helper/context/action/authActions';
import {GlobalContext} from '../../helper/context/Provider';
import AuthLogo from '../../components/AuthLogo';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {forgotPassSchema} from '../../validation/schema';
import './auth.scss';
import Spinner from '../../components/Spinner';
import ErrorToast from '../../components/ErrorToast';
import SuccessToast from '../../components/SuccessToast';

export default function ForgotPassword() {
	const {state, dispatch} = useContext(GlobalContext);
	const {passReset, passResetErr, loading, user} = state;
	const errorMsg = passResetErr;
	const successMsg = passReset;
	const {register, handleSubmit, formState: {errors}} = useForm({
		resolver: yupResolver(forgotPassSchema),
		mode: 'all',
	});
	const [formState, setFormState] = useState({});

	// Handle onChange
	const onChange = e => {
		const {name} = e.target;
		const {value} = e.target;
		setFormState({...formState, [name]: value});
	};

	const forgotPassword = async data => {
		// E.preventDefault();
		await resetPassword(data)(dispatch);
	};

	// Check if user signed in
	if (user) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<main className="auth-container">
			<div className="main-container">
				<AuthLogo />
				<form
					className="auth-container__form "
					onSubmit={handleSubmit(forgotPassword)}
				>
					{passResetErr
						? <ErrorToast errorMsg={errorMsg}/> : ''
					}
					{passReset
						? <SuccessToast successMsg={successMsg}/> : ''
					}
					<h4>Forgot Password</h4>
					<p className="auth-container__next-link">
            Remember now? &nbsp;
						<Link to="/login">Login</Link>
					</p>
					<div className="form_grid">
						<div className="form-group">
							<div className="form-input">
								<input
									className={`${errors?.email ? 'error' : ''} 
                  ${formState?.email ? 'focused' : ''}`}
									name="email"
									id="email"
									{...register('email')}
									onChange={onChange}
								/>
								<label htmlFor="email">Email address</label>
							</div>
							{errors?.email ? (
								<span className="form-group__error-msg">
									{errors?.email.message}
								</span>
							) : null}
						</div>
					</div>

					<div className="auth-container__submit flex justify-center">
						<button type="submit">
							{loading ? (
								<>
									<Spinner
										colorDark="hsl(240, 100%, 48%)"
										colorLight="hsl(240, 100%, 88%)"
									/>{' '}
                  &nbsp;
								</>
							) : null}
              Reset Password
						</button>
					</div>
				</form>
			</div>
		</main>
	);
}
