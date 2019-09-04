import React from 'react';
import { withRouter } from 'react-router-dom';
import {
	CssBaseline,
	Divider,
	Drawer,
	Hidden,
	List,
	ListItem,
	ListItemIcon,
	ListItemText
} from '@material-ui/core';
import { Gavel } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FormModal from '../FormModal';
import UserForm from '../UserForm';
import TreeForm from '../TreeForm';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	column: {
		display: 'flex',
		flexDirection: 'column'
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	listItemIconRoot: {
		minWidth: '42px'
	}
}));

function TreeDrawer({ container, tests, history }) {
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const logoStyle = {
		width: 150
	};
	function handleDrawerToggle() {
		setMobileOpen(!mobileOpen);
	}

	const goToTests = () => {
		if (!window.location.href.includes('analytics')) {
			history.push('/trees')
		}
	};

	const drawer = (
		<div>
			<div className={classes.toolbar} />
			<Divider />
			<List>
				<ListItem>
					<FormModal buttonText='Add User' FormComponent={UserForm} />
				</ListItem>
				<ListItem>
					<FormModal buttonText='Add Tree' FormComponent={TreeForm} />
				</ListItem>
				<ListItem button onClick={goToTests}>
					<ListItemIcon className={classes.listItemIconRoot}><Gavel /></ListItemIcon>
					<ListItemText primary='Trees' />
				</ListItem>
			</List>
		</div>
	);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
		</div>
	);
}

export default withRouter(TreeDrawer);
