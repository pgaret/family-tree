import React from 'react';
import ReactDOM from 'react-dom';
import { Router as BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import UserForm from './components/UserForm/UserForm';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <Route path='/' component={App} />
        <Route path='/add-user' component={UserForm} />
    </BrowserRouter>,
    document.getElementById('root')
);