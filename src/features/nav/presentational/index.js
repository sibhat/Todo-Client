import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import Search from "../../search/container";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./NavJSS";
import Auth from "../../auth/container";

const NavPresentational = ({ classes, open, handleDrawerOpen, handleDrawerClose }) => {
    return (
        <>
            <AppBar
                position="absolute"
                className={classNames(
                    classes.appBar,
                    open && classes.appBarShift
                )}
            >
                <Toolbar disableGutters={!open} className={classes.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        className={classNames(
                            classes.menuButton,
                            open && classes.menuButtonHidden
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/*<Search classes={classes} />*/}
                    <Auth/>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
            </Drawer>
        </>
    );
};

export default withStyles(styles)(NavPresentational);
