import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import LoginForm from './LoginForm';

const Login = (props) => {
  const [loggingIn, setLoggingIn] = useState(false);
  return (<>
    {(localStorage.getItem('token'))
      ? <Redirect to="/" />
      : <LoginForm setLoggingIn={setLoggingIn} />}
    {loggingIn && "Logging In..."}
  </>);
};

export default Login;
