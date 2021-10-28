import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useAuth();
    // if(isLoading){
    //   return  <Spinner animation="border" variant="secondary" />
    // }
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user?.email ? (
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
};

export default PrivateRoute;