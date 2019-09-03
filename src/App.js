import React from 'react';
import { withRouter } from 'react-router';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

const App = () => {
  const user = sessionStorage.getItem('user');
  if (!user) {
    return <Login />
  }
  else {
    return <Main user={user} />
  }
}

export default withRouter(App);
