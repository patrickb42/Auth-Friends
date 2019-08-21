import React from 'react';
import { Redirect } from 'react-router-dom';

import LoginForm from './LoginForm';

const Login = (props) => {
  return (<>
    {(localStorage.getItem('token'))
      ? <Redirect to="/" />
      : <LoginForm />}
  </>);
};

export default Login;
