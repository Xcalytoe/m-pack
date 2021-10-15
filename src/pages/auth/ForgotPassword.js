import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {resetPassword} from '../../context/Action/authActions'
import {GlobalContext} from '../../context/Provider';
import AuthLogo from '../../components/AuthLogo'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPassSchema } from "./Schema";
import './auth.scss';
import Spinner from "../../components/Spinner";
import { Redirect } from 'react-router-dom';

export default function ForgotPassword() {
    const {state, dispatch } = useContext(GlobalContext);
    const { passReset, passResetErr, loading, user } = state;
    const { register, handleSubmit, formState:{ errors }  } = useForm({
        resolver: yupResolver(forgotPassSchema),
        mode: 'all',
    });
    const [ formState, setFormState ] = useState({});

        // handle onChange 
    const onChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setFormState({...formState,[name]:value});
    }

    const forgotPassword = async (data) => {
        // e.preventDefault();
        await resetPassword(data)(dispatch);
    };

    // check if user signed in  
    if (user){
        return <Redirect to="/dashboard" />;
    }
    return (
        <main className="auth-container">
            <div className="main-container">
                <AuthLogo/>
                <form className="auth-container__form bg-white w-full p-6 py-10 md:p-10 md:py-16"  onSubmit={handleSubmit(forgotPassword)}>
                    {passResetErr ?
                    <div className="auth-container__main-error"> 
                        <svg className="inline-block mr-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0)">
                            <path d="M19.6809 15.4445L12.0364 2.20381C11.6113 1.46756 10.85 1.02795 9.99975 1.02795C9.14955 1.02795 8.38815 1.46756 7.96307 2.20381L0.318593 15.4444C-0.106523 16.1808 -0.106523 17.0599 0.318593 17.7962C0.74371 18.5325 1.50504 18.9721 2.35527 18.9721H17.6442C18.4944 18.9721 19.2558 18.5325 19.6809 17.7962C20.1061 17.0599 20.1061 16.1808 19.6809 15.4445ZM18.6662 17.2104C18.4529 17.5798 18.0708 17.8004 17.6442 17.8004H2.35527C1.92863 17.8004 1.5466 17.5798 1.33332 17.2104C1.12004 16.8409 1.12004 16.3998 1.33332 16.0304L8.97787 2.78971C9.19115 2.42026 9.57318 2.19971 9.99979 2.19971C10.4263 2.19971 10.8084 2.42026 11.0217 2.78971L18.6662 16.0304C18.8795 16.3998 18.8795 16.8409 18.6662 17.2104Z" fill="#BE0000"/>
                            <path d="M10.5858 6.87537H9.41406V12.734H10.5858V6.87537Z" fill="black"/>
                            <path d="M10.0001 13.9058C9.5693 13.9058 9.21887 14.2563 9.21887 14.687C9.21887 15.1177 9.5693 15.4682 10.0001 15.4682C10.4308 15.4682 10.7812 15.1177 10.7812 14.687C10.7812 14.2563 10.4308 13.9058 10.0001 13.9058Z" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg> &nbsp;
                        <span className="">{passResetErr}</span> 
                    </div>
                    : ""}
                    {passReset ?
                        <div className="auth-container__main-msg"> 
                            <svg className="inline-block mr-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.4284 2.73409C19.1342 2.43936 18.6568 2.43885 18.3626 2.73284L9.31989 11.7517L6.05731 8.20819C5.7754 7.90217 5.29876 7.88233 4.99224 8.1642C4.68595 8.44612 4.66634 8.92299 4.94825 9.22928L8.74224 13.3496C8.88118 13.5006 9.07564 13.5883 9.28067 13.5926C9.28618 13.5928 9.29149 13.5928 9.29677 13.5928C9.49603 13.5928 9.68771 13.5137 9.82892 13.373L19.4269 3.80014C19.7219 3.5062 19.7224 3.02881 19.4284 2.73409Z" fill="#3DCFA3"/>
                                <path d="M19.2462 9.24621C18.8299 9.24621 18.4925 9.58363 18.4925 10C18.4925 14.6829 14.6829 18.4925 10 18.4925C5.31734 18.4925 1.50754 14.6829 1.50754 10C1.50754 5.31734 5.31734 1.50754 10 1.50754C10.4163 1.50754 10.7538 1.17012 10.7538 0.753789C10.7538 0.337422 10.4163 0 10 0C4.48594 0 0 4.48594 0 10C0 15.5138 4.48594 20 10 20C15.5138 20 20 15.5138 20 10C20 9.58367 19.6626 9.24621 19.2462 9.24621Z" fill="#3DCFA3"/>
                            </svg> &nbsp;
                            <span className=" text-green-800 text-sm">{passReset}</span> 
                        </div>
                    : ""}
                    <h4>Forgot Password</h4>
                    <p className="auth-container__next-link">Remember now?  &nbsp; 
                        <Link to="/login">
                        Login
                        </Link>
                    </p>
                    <div className="form_grid">
                 
                        <div className="form-group">
                            <div className="form-input">
                                <input 
                                    className={`${errors?.email ? "error": ""} ${formState?.email ? "focused": ""}`} 
                                    name="email" 
                                    id="email"  
                                    {...register("email")}
                                    onChange={onChange}
                                />
                                <label htmlFor="email">Email address</label>
                            </div>
                            {errors?.email ? <span className="form-group__error-msg">{errors?.email.message}</span>: null}
                        </div>
                    </div>
                  
                    <div className="auth-container__submit flex justify-center">
                        <button type="submit" > 
                        {loading ?
                            <>
                                <Spinner 
                                    colorDark="hsl(240, 100%, 48%)"
                                    colorLight="hsl(240, 100%, 88%)"
                                /> &nbsp;
                            </>
                       : null} 
                        Reset Password</button>
                        
                    </div>
                </form>
            </div>
        </main>
    )
}
