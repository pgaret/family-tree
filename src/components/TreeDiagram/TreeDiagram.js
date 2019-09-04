import React from 'react';
import Tree from 'react-d3-tree';
import TreeNode from './TreeNode/TreeNode';
import styles from './TreeDiagram.module.css';

const TreeDiagram = ({ tree }) => {
    console.log(tree);
    return (
        <section className={styles.treeSection}>
            { tree._id && 
                <Tree 
                    data={tree}
                    orientation='vertical'
                    allowForeignObjects
                    nodeLabelComponent={{
                        render: <TreeNode />,
                        foreignObjectWrapper: {
                            y: 8,
                            width: 200,
                            height: 200
                        }
                    }}
                    translate={{
                        x: 100,
                        y: 100
                    }}
                />
            }
            </section>
    );
}

export default TreeDiagram;