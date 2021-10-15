import React, { useContext } from 'react'
import {GlobalContext} from '../../context/Provider';
import {
    Route,
    Redirect,
  } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
    const {state } = useContext(GlobalContext);
    const { user } = state;
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
}
