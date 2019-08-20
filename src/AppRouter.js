import React from 'react';
import { Router as BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import UserForm from './components/UserForm/UserForm';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Route path='/login' component={Login} />
            <Route path='/add-user' component={UserForm} />
        </BrowserRouter>
    );
}