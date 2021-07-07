import React from 'react';
import { Redirect } from 'react-router-dom';

const LandingRedirect = (props) => {
  return (<>
    {(localStorage.getItem('token'))
      ? <Redirect to="/friends" />
      : <Redirect to="/login" />}
  </>);
};

export default LandingRedirect;
