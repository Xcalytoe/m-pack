import React, {createContext, useReducer, useState, useEffect} from 'react';
import rootReducer from "../context/reducers";
import { initialAuthState } from './reducers/authReducer';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LOGIN_SUCCESS } from './actionsType/actiontypes';
import { generateUserDocument } from '../firebase/firebaseConfig';

// import {LOGIN_SUCCESS, REMINDER_SUCCESS} from '../context/actionsType/actiontypes'
// import {auth, generateUserDocument, fetchBirthday} from '../firebase/firebaseConfig';
// import {modal, initialState} from './reducers/modalReducer';
// import {reminder, initialS} from './reducers/reminderReducer';

export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({children}) => {
    const initialState = { ...initialAuthState }
    const [state, dispatch] = useReducer(rootReducer, initialState)
    // const [authState, authDispatch] = useReducer(auths, authInitial)
    // const [modalState, modalDispatch] = useReducer(modal, initialState)
    // const [reminderState, reminderDispatch] = useReducer(reminder, initialS)
    const [loading, setLoading] =  useState(true)
    // const {user} = authState;

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
          if (user) {
                const data = await generateUserDocument(user, {});
              // dispatch user's info 
              dispatch({
                type:LOGIN_SUCCESS,
                payload: data
            })
            setLoading(false);
            // ...
          } else {
            // User is signed out
            setLoading(false);
          }
        });
                
      }, []);
    return(
        <GlobalContext.Provider value={{
            state, 
            dispatch
        }}>
            {!loading && children}
        </GlobalContext.Provider>
    )
}

