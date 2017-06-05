import React from 'react';
import {Redirect} from 'react-router-dom';

/*
Auth:     Stateless component, wraps authentication
          If user is authenticated returns children components,
          If not will render LoginPage
*/

const Auth = (props) => {
let {currentUser} = props;

if (currentUser === '') {
  return (<Redirect to="/login"/>);
} else {
  return (
  <div>
    {props.children}
  </div>
  );
}
};
export default Auth;

