import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, history, ...rest }) => {
	const checkToken = () => {
		return sessionStorage.getItem('token')
	}
	return (
		<Route {...rest} render={(props) => (
			checkToken() ?
				<Component {...props} />
				: <Redirect to="/login" />
		)} />
	);
}

export default PrivateRoute;
