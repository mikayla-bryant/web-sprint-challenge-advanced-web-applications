import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('token')) {
          // if the local storage has a token, return the Component
          return <Component />;
        } else {
          return <Redirect to='/' />; //if not, redirect to login page
        }
      }}
    />
  );
}

export default PrivateRoute;

//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
