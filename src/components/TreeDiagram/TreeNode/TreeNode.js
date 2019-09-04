import React from 'react';
import classnames from 'classnames';
import FormModal from '../../FormModal';
import UserForm from '../../UserForm';
import backendApi from '../../../backendApi';
import { makeName } from '../../../utilities';
import styles from '../TreeDiagram.module.css';

const TreeNode = ({ nodeData, className }) => {
    const [person, setPerson] = React.useState({ head: true });
    React.useEffect(() => {
        const getPerson = async () => {
            const { data } = await backendApi.getPerson(nodeData.userId);
            setPerson(data);
        }
        if (nodeData.userId) {
            getPerson();
        } else {

        }
    }, [nodeData.id, nodeData.userId]);
    console.log(person);

    const handleAddParent = (parent) => {
        console.log(parent);
    }

    const handleAddChild = (child) => {
        console.log(child);
    }

    return (
        <div className={classnames(styles.nodeLabel, className)}>
        { person.head ? 
            <div>Head</div> :
            <div>
                <h2 style={{ textAlign: 'center' }}>{makeName(person) || 'Name Missing'}</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <FormModal buttonText='Add Parent' FormComponent={UserForm} onSubmit={handleAddParent} />
                    <FormModal buttonText='Add Child' FormComponent={UserForm} onSubmit={handleAddChild} />
                </div>
            </div>
        }
        </div>
    );
}

export default TreeNode;