import React from 'react';
import {CircularProgress} from "@material-ui/core";
import TreeAppBar from "../TreeAppBar/TreeAppBar";
import TreeDrawer from "../TreeDrawer/TreeDrawer";

const row = {
	display: 'flex',
	flexDirection: 'row'
};

const body = {
	marginTop: '76px',
	flexGrow: 1
};

const loadingStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '66vh'
};

const TreeContainer = ({ children, person, loading }) => {
	return (
		<div>
			<div>
				<TreeAppBar loading={loading} person={person} />
			</div>
			<div style={row}>
				<TreeDrawer />
				<div style={body}>
					{ loading ?
						<div style={loadingStyle}><CircularProgress size={100} /></div>
						: children
					}
				</div>
			</div>
		</div>
	);
};

export default TreeContainer;
