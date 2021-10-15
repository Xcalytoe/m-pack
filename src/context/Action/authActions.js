
import {auth, googleProvider, generateUserDocument } from '../../firebase/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { REG_LOADING, REG_SUCCESS, REG_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS, SIGNOUT_LOADING, SIGNOUT_ERROR,RESET_PASS_LOADING,RESET_PASS_SUCCESS,RESET_PASS_ERROR } from '../actionsType/actiontypes';

// sign in user with google 
export const googleSign = () => async (dispatch)=>{
    dispatch({
        type:REG_LOADING,
        loading: true,
    })
    await signInWithPopup(auth, googleProvider )
    .then((result) => {

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        return result.user;      
    }).then(async ( user) => {
        let dummy = { displayName :user.displayName, firstName:null, lastName:null}
        return await generateUserDocument(user, dummy);//get user details 

    }).then(val => {
        dispatch({
            type:REG_SUCCESS,
            payload:val,
            loading:false

        })

    }).catch((error) => {
        // Handle Errors here.
        var errorMessage = error.message;
        dispatch({
            type:REG_ERROR,
            loading: false,
            payload: errorMessage
        })
    });
}
// register user with email and password 
export const registerUser = ({email, password, firstName, lastName}, {displayName}) =>  async (dispatch)=>{
    dispatch({
        type:REG_LOADING,
        loading:true
    })
    try{
      const {user} = await createUserWithEmailAndPassword(auth, email, password);
    //    send data to get user document 
      const data = await generateUserDocument(user, {firstName, lastName, displayName});
    // dispatch data returened 
        dispatch({
            type:REG_SUCCESS,
            payload:data,
            loading:false

        })
    }
    catch(error){
    //   setError('Error Signing up with email and password');
        dispatch({
            type:REG_ERROR,
            loading: false,
            payload: error.message
        })
    }

  };
//   sign in user 
export const signIn = ({email, loginPass})=> async (dispatch)=>{
    dispatch({
        type:LOGIN_LOADING,
        loading:true
    })
    signInWithEmailAndPassword(auth, email, loginPass)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch({
            type:LOGIN_SUCCESS,
            payload:user
        })

    })
    .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        dispatch({
            type:LOGIN_ERROR,
            loading: false,
            payload: errorMessage
        })
    });
}
//   sign out user 
export const signOutUser = () => async (dispatch)=>{
    dispatch({
        type:SIGNOUT_LOADING,
        loading: true
    })
    signOut(auth).then(() => {
        dispatch({
            type:SIGNOUT_SUCCESS,
            authError: null,
            payload: null
        })
      }).catch((error) => {
        dispatch({
            type:SIGNOUT_ERROR,
            loading:false,
            payload: error.message
        })
      });
}
// password reset 
export const resetPassword = ({email}) => async (dispatch)=>{
    dispatch({
        type:RESET_PASS_LOADING,
        loading:true,
    })
    sendPasswordResetEmail(auth, email, {url: "http://localhost:3000/login"})
    .then(() => {
        console.log("sent",email)

       // Email sent.
       dispatch({
            type:RESET_PASS_SUCCESS,
            loading:false,
            payload:"Password reset email sent!"
        })
    })
    .catch((error) => {
      const errorMessage = error.message;
    // An error happened.
        dispatch({
            type:RESET_PASS_ERROR,
            loading:false,
            payload: errorMessage
        })
    });
}