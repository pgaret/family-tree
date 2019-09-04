import React from 'react';
import { Typography } from '@material-ui/core';
import backendApi from '../../backendApi';
import TreeContainer from "../../components/TreeContainer/TreeContainer";

import styles from './Main.module.css';
import TreeDiagram from '../../components/TreeDiagram/TreeDiagram';

const Main = () => {
    const [person, setPerson] = React.useState({});
    const [tree, setTree] = React.useState({ loading: true });
    const userId = sessionStorage.getItem('user');
    React.useEffect(() => {
        const getData = async() => {
            const userResponse = await backendApi.getPerson(userId);
            setPerson(userResponse.data);
            console.log(userResponse.data.trees.length);
            if (userResponse.data.trees && userResponse.data.trees.length > 0) {
                console.log(userResponse.data.trees[0]);
                const treeResponse = await backendApi.getTree(userResponse.data.trees[0]);
                console.log(treeResponse)
                setTree(treeResponse.data);
            } else {
                setTree({});
            }
        }
        getData();
    }, [userId]);

    console.log(tree);

    let title = 'You have no trees';
    if (tree.loading) {
        title = 'Loading...'
    }
    else if (tree._id) {
        title = tree.name;
    }

    return (
        <TreeContainer person={person} loading={!person._id}>
            <Typography variant="h5">{title}</Typography>
            <TreeDiagram tree={tree} />
        </TreeContainer>
    );
}

export default Main;
