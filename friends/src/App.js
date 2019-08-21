import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import LandingRedirect from './components/LandingRedirect.jsx'
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

const App = (props) => {
  return (<>
    <Router>
      <Route exact path="/" component={LandingRedirect} />
      <Route path="/login" component={Login} />
      <Route path="/friends" component={FriendsList} />
    </Router>
  </>);
}

export default App;
