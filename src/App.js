import React from 'react';
import { withRouter, Redirect } from 'react-router';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

const App = () => {
  console.log('App loaded')
  const user = sessionStorage.getItem('user');
  console.log(user);
  if (!user) {
    return <Redirect to="/login" />
  }
  else {
    return <Main user={user} />
  }
}

export default withRouter(App);
