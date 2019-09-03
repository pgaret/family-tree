import React from 'react';
import { TextField, Button } from '@material-ui/core';
import backendApi from '../../backendApi';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const handleLogin = async () => {
        if (email) {
            if (email.includes('@') && (email.includes('.com') || email.includes('.net') || email.includes('.io') || email.includes('.org') || email.includes('.xyz'))) {
                const { data } = await backendApi.login(email);
                console.log(data);
                if (data._id) {
                    sessionStorage.setItem('user', JSON.stringify(data._id));
                }
            }
        }
    }
    return (
        <div>
            <div>
                <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <Button color='primary' variant='contained' onClick={handleLogin}>Login</Button>
        </div>
    )
}

export default Login;