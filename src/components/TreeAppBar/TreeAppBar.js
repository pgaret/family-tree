import React from 'react';
import { withRouter } from 'react-router-dom';
import {
	makeStyles,
	AppBar,
	Avatar,
	IconButton,
	Menu,
	MenuItem,
	Popover,
	Toolbar,
	Typography, Badge,
} from '@material-ui/core';
import NotificationIcon from '@material-ui/icons/NotificationsActive';
import NotificationsMenu from "./NotificationsMenu/NotificationsMenu";

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexGrow: 1,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	supportLink: {
		color: 'black',
		textDecoration: 'none'
	}
}));

const TreeAppBar = ({ loading, person, history }) => {
	const classes = useStyles();
	const [notificationMenuElement, setNotificationMenuElement] = React.useState(false);
	const closeNotificationMenu = () => setNotificationMenuElement(null);
	const [profileMenuElement, setProfileMenuElement] = React.useState(false);
	const closeProfileMenu = () => setProfileMenuElement(null);
	const { firstName, lastName } = person;
	const handleLogout = () => {
		sessionStorage.removeItem('email');
		sessionStorage.removeItem('user');
		history.push('/login');
	};

	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography className={classes.title}>
						FamilyTree
					</Typography>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						className={classes.menuButton}
						onClick={(e) => setNotificationMenuElement(e.currentTarget)}
					>
						<Badge
							badgeContent={4}
							color='secondary'
						>
							<NotificationIcon />
						</Badge>
					</IconButton>
					<Popover
						id="simple-menu"
						anchorEl={notificationMenuElement}
						keepMounted
						open={Boolean(notificationMenuElement)}
						onClose={closeNotificationMenu}
					>
						<NotificationsMenu />
					</Popover>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						className={classes.menuButton}
						onClick={(e) => setProfileMenuElement(e.currentTarget)}
					>
						<Avatar className={classes.purpleAvatar}>{ loading ? 'Loading...' : `${firstName[0]}${lastName[0]}` }</Avatar>
					</IconButton>
					<Menu
						id="simple-menu"
						anchorEl={profileMenuElement}
						keepMounted
						open={Boolean(profileMenuElement)}
						onClose={closeProfileMenu}
					>
						<MenuItem onClick={closeNotificationMenu}>Account</MenuItem>
						<MenuItem>
							<a
								target="_blank"
								rel="noopener noreferrer"
								className={classes.supportLink}
								href="https://www.teammobot.com"
							>Support</a>
						</MenuItem>
						<MenuItem onClick={handleLogout}>Logout</MenuItem>
					</Menu>

				</Toolbar>
			</AppBar>
		</div>
	);
}

export default withRouter(TreeAppBar);
