import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import backendApi from '../../backendApi';

const Login = ({ history }) => {
    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState('');
    const handleLogin = async () => {
        if (email) {
            if (email.includes('@') && (email.includes('.com') || email.includes('.net') || email.includes('.io') || email.includes('.org') || email.includes('.xyz'))) {
                const { data } = await backendApi.login(email);
                console.log(data);
                if (data.result) {
                    sessionStorage.setItem('user', data.result);
                    history.push('/');
                } else {
                    setError(data.error);
                }
            }
        }
    }
    return (
        <div>
            { error && <div style={{ color: 'red' }}>{error}</div> }
            <div>
                <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <Button color='primary' variant='contained' onClick={handleLogin}>Login</Button>
        </div>
    )
}

export default withRouter(Login);
