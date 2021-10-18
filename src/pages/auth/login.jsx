import React, {useState, useContext} from 'react';
import {Link, useHistory, Redirect} from 'react-router-dom';
import {googleSign, signIn} from '../../helper/context/action/authActions';
import {GlobalContext} from '../../helper/context/Provider';
import AuthLogo from '../../components/AuthLogo';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '../../validation/schema';
import './auth.scss';
import Spinner from '../../components/Spinner';
import ErrorToast from '../../components/ErrorToast';

export default function Login() {
	const history = useHistory();
	const {state, dispatch} = useContext(GlobalContext);
	const {loginError, loading, user} = state;
	const errorMsg = loginError;

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(loginSchema),
		mode: 'all',
	});
	const [eyeToggle, setEyeToggle] = useState(true);
	const [formState, setFormState] = useState({});

	// Handle onChange
	const onChange = e => {
		const {name} = e.target;
		const {value} = e.target;
		setFormState({...formState, [name]: value});
	};

	const loginUserWithEmailAndPasswordHandler = async data => {
		// E.preventDefault();
		await signIn(data)(dispatch);
		history.push('/dashboard');
	};

	const signInWithGoogle = async e => {
		e.preventDefault();
		//    Call the auth action
		await googleSign()(dispatch);
		history.push('/dashboard');
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
					className="auth-container__form"
					onSubmit={
						handleSubmit(loginUserWithEmailAndPasswordHandler)
					}
				>
					{loginError ? (
						<ErrorToast errorMsg={errorMsg}/>
					) : (
						''
					)}
					<h4>Login</h4>
					<p className="auth-container__next-link">
            Don&rsquo;t have an account? &nbsp;
						<Link to="/register">Register</Link>
					</p>
					<div className="form_grid">
						<div className="form-group">
							<div className="form-input">
								<input
									className={`
                  ${errors?.email ? 'error' : ''} ${
			formState?.email ? 'focused' : ''}
                    `}
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

						<div className="form-group">
							<div className="form-input">
								<input
									className={`
                  ${errors?.loginPass ? 'error' : ''} 
                  ${formState?.loginPass ? 'focused' : ''}
                  `}
									type={eyeToggle ? 'password' : 'text'}
									name="loginPass"
									id="loginPass"
									{...register('loginPass')}
									onChange={onChange}
								/>
								<label htmlFor="loginPass">Password</label>
								<span
									className="form-input__eye-con"
									onClick={e => {
										e.preventDefault();
										setEyeToggle(!eyeToggle);
									}}
								>
									<svg
										className="form-input__eye-btn"
										width="17"
										height="17"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clipPath="url(#clip0)">
											<path
												d="
                        M9.4878 3.87476C9.16351 3.83968
                        8.83401 3.81958 8.5 3.81458C7.04048
                        3.82105 5.52751 4.17607 4.0954
                        4.85634C3.03208 5.38223 1.99628 6.12467
                        1.09674 7.04047C0.654953 7.50797 0.0911058
                        8.18488 0 8.9071C0.0107667 9.53273 0.682168
                        10.3049 1.09674 10.7738C1.94027 11.6536
                        2.94909 12.3748 4.0954 12.9579C4.13436 12.9768
                        4.17346 12.9955 4.21264 13.0139L3.14912 14.8712L4.59419
                        15.7252L12.4059 2.12478L11.015 1.27467L9.4878
                        3.87476ZM12.7863 4.80238L11.7248 6.64202C12.2132
                        7.27643 12.503 8.05877 12.503 8.9071C12.503 11.0216
                        10.7107 12.7358 8.49895 12.7358C8.40334 12.7358 8.31068
                        12.7255 8.21672 12.7192L7.51427 13.9353C7.83823 13.97
                        8.16579 13.9953 8.49999 13.9996C9.9609 13.9931 11.473
                        13.634 12.9036 12.9579C13.9669 12.432 15.0037 11.6896
                        15.9032 10.7738C16.345 10.3063 16.9089 9.62934 17
                        8.9071C16.9892 8.28149 16.3178 7.50929 15.9032
                        7.04046C15.0597 6.16062 14.0499 5.43944 12.9036
                        4.85631C12.8649 4.83755 12.8253 4.82068 12.7863
                        4.80238ZM8.49897 5.07839C8.59595 5.07839 8.69217
                        5.08227 8.78741 5.08876L7.9646 6.51337C6.80982
                        6.74749 5.94336 7.73001 5.94336 8.90608C5.94336
                        9.20151 5.99777 9.48435 6.09796 9.74652C6.09807
                        9.74681 6.09784 9.74727 6.09796 9.74757L5.27306
                        11.1763C4.78359 10.5413 4.49486 9.75642 4.49486
                        8.90709C4.49487 6.79264 6.28728 5.07837 8.49897
                        5.07839ZM10.8927 8.08222L9.03852 11.2946C10.1871
                        11.0561 11.0473 10.0781 11.0473 8.90608C11.0473
                        8.61603 10.9894 8.34028 10.8927 8.08222Z"
												fill="#6D8494"
												fillOpacity="0.4"
											/>
										</g>
										<defs>
											<clipPath id="clip0">
												<rect
													width="17"
													height="17"
													fill="white" />
											</clipPath>
										</defs>
									</svg>
								</span>
							</div>
							{errors?.loginPass ? (
								<span className="form-group__error-msg">
									{errors?.loginPass.message}
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
              Login
						</button>
					</div>
					<div className="auth-container__google flex justify-center">
						<button className="w-full " onClick={signInWithGoogle}>
							<svg
								className="inline-block"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M18.1716
                  8.36792H17.5003V8.33334H10.0003V11.6667H14.7099C14.0228
                  13.6071 12.1766 15 10.0003 15C7.23908 15 5.00033 12.7613
                  5.00033 10C5.00033 7.23876 7.23908 5.00001 10.0003
                  5.00001C11.2749 5.00001 12.4345 5.48084 13.3174
                  6.26625L15.6745 3.90917C14.1862 2.52209 12.1953 1.66667
                  10.0003 1.66667C5.39824 1.66667 1.66699 5.39792 1.66699
                  10C1.66699 14.6021 5.39824 18.3333 10.0003 18.3333C14.6024
                  18.3333 18.3337 14.6021 18.3337 10C18.3337 9.44126 18.2762
                  8.89584 18.1716 8.36792Z"
									fill="#FFC107"
								/>
								<path
									d="
                  M2.62793 6.12125L5.36585 8.12917C6.10668 6.29501
                  7.90085 5.00001 10.0004 5.00001C11.275 5.00001 12.4346
                  5.48084 13.3175 6.26625L15.6746 3.90917C14.1863
                  2.52209 12.1954 1.66667 10.0004 1.66667C6.7996
                  1.66667 4.02376 3.47376 2.62793 6.12125Z"
									fill="#FF3D00"
								/>
								<path
									d="M9.9998 18.3333C12.1523 18.3333 14.1081
                  17.5096 15.5869 16.17L13.0077 13.9875C12.1429
                  14.6452 11.0862 15.0009 9.9998 15C7.8323 15 5.99189
                  13.6179 5.29855 11.6892L2.58105 13.7829C3.96022
                  16.4817 6.76105 18.3333 9.9998 18.3333Z"
									fill="#4CAF50"
								/>
								<path
									d="M18.1712
                  8.36791H17.5V8.33333H10V11.6667H14.7096C14.3809
                  12.5902 13.7889 13.3972 13.0067 13.9879L13.0079
                  13.9871L15.5871 16.1696C15.4046 16.3354 18.3333
                  14.1667 18.3333 9.99999C18.3333 9.44124 18.2758
                  8.89583 18.1712 8.36791Z"
									fill="#1976D2"
								/>
							</svg>{' '}
              &nbsp; Login with Google
						</button>
					</div>
					<div>
						<Link to="/forgot-password">Forgot password?</Link>
					</div>
				</form>
			</div>
		</main>
	);
}
