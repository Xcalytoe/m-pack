import React, { useState, useEffect, useContext } from "react";
import {googleSign, register} from '../context/Action/authActions'
import {GlobalContext} from '../context/Provider';

//combine reducer function
export const combineReducers = (...reducers) => (state, action) => {
    for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action)
    return state
}

  