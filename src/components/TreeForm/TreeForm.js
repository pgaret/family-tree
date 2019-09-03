import React from 'react';
import { TextField, Button } from '@material-ui/core';
import backendApi from '../../backendApi';

export const TreeForm = () => {
    const userId = JSON.parse(sessionStorage.getItem('user'))._id;
    const [name, setName] = React.useState('');
    const submitNewTree = async () => {
        console.log(name);
        const response = await backendApi.postTree(name, userId);
        console.log(response);
      }
    return (
        <div>
            <div>
                <TextField
                    id='treeName'
                    type='string'
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div style={{ marginTop: 16 }}>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={submitNewTree}
                >Submit
                </Button>
            </div>
        </div>
    )
}

export default TreeForm;