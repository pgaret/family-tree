import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Login from './pages/Login/Login';

ReactDOM.render(
    <BrowserRouter>
        <Route path='/' component={App} />
        <Route path='/login' component={Login} />
    </BrowserRouter>,
    document.getElementById('root')
);