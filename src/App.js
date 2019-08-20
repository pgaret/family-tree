import React from 'react';
import { TextField, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import Login from './pages/Login/Login';
import UserForm from './components/UserForm/UserForm';
import backendApi from './backendApi';

const App = () => {
  const user = sessionStorage.getItem('user');
  if (!user) {
    const handleLogin = async (email) => {
      if (email) {
          if (email.includes('@') && (email.includes('.com') || email.includes('.net') || email.includes('.io') || email.includes('.org') || email.includes('.xyz'))) {
              const { data } = await backendApi.getSelf(email);
              if (data._id) {
                  sessionStorage.setItem('user', JSON.stringify(data));
              }
          }
      }
  }
    return <Login />
  }
  else {
    return <UserForm />
  }
}

export default withRouter(App);
