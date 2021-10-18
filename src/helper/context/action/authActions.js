import {auth, googleProvider,
	generateUserDocument} from '../../../firebase/firebaseConfig';
import {/*   GoogleAuthProvider, */ signInWithPopup, signOut,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail} from 'firebase/auth';
import {
	REG_LOADING, REG_SUCCESS, REG_ERROR,
	LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR,
	SIGNOUT_SUCCESS, SIGNOUT_LOADING, SIGNOUT_ERROR,
	RESET_PASS_LOADING, RESET_PASS_SUCCESS, RESET_PASS_ERROR,
} from '../actionsType/actiontypes';

// Sign in user with google
export const googleSign = () => async dispatch => {
	dispatch({
		type: REG_LOADING,
		loading: true,
	});
	await signInWithPopup(auth, googleProvider)
		.then(result =>
		// Const credential = GoogleAuthProvider.credentialFromResult(result);
		// const token = credential.accessToken;

		// The signed-in user info.
			result.user,
		)
		.then(async user => {
			const dummy = {
				displayName: user.displayName,
				firstName: null,
				lastName: null,
			};
			//   Get user details
			return generateUserDocument(user, dummy);
		})
		.then(val => {
			dispatch({
				type: REG_SUCCESS,
				payload: val,
				loading: false,
			});
		})
		.catch(error => {
			// Handle Errors here.
			const errorMessage = error.message;
			dispatch({
				type: REG_ERROR,
				loading: false,
				payload: errorMessage,
			});
		});
};

// Register user with email and password
export const registerUser = (
	{email, password, firstName, lastName},
	{displayName},
) => async dispatch => {
	dispatch({
		type: REG_LOADING,
		loading: true,
	});
	try {
		const {user} = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);
		//    Send data to get user document
		const data = await generateUserDocument(user, {
			firstName,
			lastName,
			displayName,
		});
		// Dispatch data returened
		dispatch({
			type: REG_SUCCESS,
			payload: data,
			loading: false,
		});
	} catch (error) {
		//   SetError('Error Signing up with email and password');
		dispatch({
			type: REG_ERROR,
			loading: false,
			payload: error.message,
		});
	}
};

//   Sign in user
export const signIn = ({email, loginPass}) => async dispatch => {
	dispatch({
		type: LOGIN_LOADING,
		loading: true,
	});
	signInWithEmailAndPassword(auth, email, loginPass)
		.then(userCredential => {
			// Signed in
			const {user} = userCredential;
			dispatch({
				type: LOGIN_SUCCESS,
				payload: user,
			});
		})
		.catch(error => {
			// Const errorCode = error.code;
			const errorMessage = error.message;
			dispatch({
				type: LOGIN_ERROR,
				loading: false,
				payload: errorMessage,
			});
		});
};

//   Sign out user
export const signOutUser = () => async dispatch => {
	dispatch({
		type: SIGNOUT_LOADING,
		loading: true,
	});
	signOut(auth)
		.then(() => {
			dispatch({
				type: SIGNOUT_SUCCESS,
				payload: null,
			});
		})
		.catch(error => {
			dispatch({
				type: SIGNOUT_ERROR,
				loading: false,
				payload: error.message,
			});
		});
};

// Password reset
export const resetPassword = ({email}) => async dispatch => {
	dispatch({
		type: RESET_PASS_LOADING,
		loading: true,
	});
	console.log('sent', email);

	sendPasswordResetEmail(auth, email, {
		// Url: 'https://m-pack.netlify.app/login',
		url: 'http://localhost:3000/login',
	})
		.then(() => {
			// Email sent.
			dispatch({
				type: RESET_PASS_SUCCESS,
				loading: false,
				payload: 'Password reset email sent!',
			});
		})
		.catch(error => {
			const errorMessage = error.message;
			// An error happened.
			dispatch({
				type: RESET_PASS_ERROR,
				loading: false,
				payload: errorMessage,
			});
		});
};
