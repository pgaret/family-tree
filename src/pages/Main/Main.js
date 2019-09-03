import React from 'react';
import { Typography, Button } from '@material-ui/core';
import FormModal from '../../components/FormModal/FormModal';
import UserForm from '../../components/UserForm/UserForm';
import TreeForm from '../../components/TreeForm/TreeForm';
import backendApi from '../../backendApi';

const Main = () => {
    const userId = JSON.parse(sessionStorage.getItem('user'));
    React.useEffect(() => {
        const getData = async() => {
            const response = await backendApi.getSelf(userId);
            console.log(response);
        }
        getData();
    }, [userId])
    return (
        <div>
            <Typography variant="h5">Main Page</Typography>
            <FormModal buttonText='Add User' FormComponent={UserForm} />
            <FormModal buttonText='Add Tree' FormComponent={TreeForm} />
        </div>
    );
}

export default Main;