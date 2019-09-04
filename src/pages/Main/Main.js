import React from 'react';
import { Typography, Button } from '@material-ui/core';
import FormModal from '../../components/FormModal/FormModal';
import UserForm from '../../components/UserForm/UserForm';
import TreeForm from '../../components/TreeForm/TreeForm';
import backendApi from '../../backendApi';
import TreeContainer from "../../components/TreeContainer/TreeContainer";

const Main = () => {
    const [person, setPerson] = React.useState({});
    const [tree, setTree] = React.useState({});
    const userId = sessionStorage.getItem('user');
    React.useEffect(() => {
        const getData = async() => {
            const userResponse = await backendApi.getPerson(userId);
            console.log(userResponse);
            setPerson(userResponse.data);
            if (userResponse.data.trees && userResponse.data.trees.length > 0) {
                const treeResponse = await backendApi.getTree(userResponse.data.trees[0]._id);
                console.log(treeResponse)
                setTree(treeResponse.data);
            }
        }
        getData();
    }, [userId])
    return (
        <TreeContainer person={person} loading={!person._id}>
            <Typography variant="h5">Main Page</Typography>
            <FormModal buttonText='Add User' FormComponent={UserForm} />
            <FormModal buttonText='Add Tree' FormComponent={TreeForm} />

        </TreeContainer>
    );
}

export default Main;
