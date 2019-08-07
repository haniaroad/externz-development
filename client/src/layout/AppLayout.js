import React, { Component } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  ListItemIcon,
  Menu,
  MenuItem
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import AccountCircle from "@material-ui/icons/AccountCircle";

import logo from "../logo.svg";

const drawerWidth = 200;

const menuItems = [
  {
    id: 1,
    name: "Home",
    icon: <InboxIcon />
  },
  {
    id: 2,
    name: "Profile",
    icon: <InboxIcon />
  },
  {
    id: 3,
    name: "Companies",
    icon: <InboxIcon />
  },
  {
    id: 4,
    name: "Settings",
    icon: <InboxIcon />
  }
];

const useStyles = theme => ({
  root: {
    display: "flex",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    width: "100%",
    background: "white"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: "#0066CC"
  },
  button: {
    borderRadius: 0,
    margin: theme.spacing.unit,
    height: 64,
    color: "#0066CC",
    backgroundColor: "white"

    // color: "white",
    // "&:hover": {
    //   backgroundColor: "#003366"
    // }
  },
  appBar: {
    boxShadow: "none",
    overflow: "hidden",
    backgroundColor: "white",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: drawerWidth
  },
  title: {
    flexShrink: 1
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    background: "white"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    height: "calc(100% - 56px)",
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class AppLayout extends Component {
  state = {
    auth: false,
    anchorEl: null,
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = event => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, children } = this.props;
    const { auth, anchorEl, open } = this.state;
    const openDropdown = Boolean(anchorEl);

    return (
      <>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position='fixed'
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open
            })}
          >
            <Toolbar>
              <IconButton
                color='inherit'
                aria-label='Open drawer'
                onClick={this.handleDrawerOpen}
                edge='start'
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant='title' color='inherit' noWrap>
                <img
                  alt='pr-logo-ultd'
                  src={logo}
                  style={{ alignSelf: "center", height: 30 }}
                  resizeMode='contain'
                />
              </Typography>

              {/* //Add Dropdown Menu Below */}

              {auth ? (
                <div style={{ position: "absolute", right: 0 }}>
                  <IconButton
                    aria-owns={this.openDropdown ? "menu-appbar" : undefined}
                    aria-haspopup='true'
                    onClick={this.handleMenu}
                    color='inherit'
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id='menu-appbar'
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={openDropdown}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      Notifications
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>Settings</MenuItem>
                    <MenuItem onClick={this.handleClose}>Sign Out</MenuItem>
                  </Menu>
                </div>
              ) : (
                <div
                  style={{ position: "absolute", right: 0, overflow: "hidden" }}
                >
                  <Button className={classes.button}>Sign In</Button>
                </div>
              )}

              {/* //End of Dropdown Menu */}
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant='persistent'
            anchor='left'
            open={open}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronRightIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              {menuItems.map((item, index) => (
                <ListItem button key={item.id} onClick={this.handleDrawerClose}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open
            })}
          >
            <div className={classes.drawerHeader} />
            {children}
          </main>
        </div>
      </>
    );
  }
}

AppLayout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(AppLayout);
