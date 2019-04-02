import React from "react";
import {withRouter} from "react-router-dom";
import {withStyles, CssBaseline} from "@material-ui/core";
import {connect} from "react-redux";
import compose from "recompose/compose";

// import TransitionGroup from "react-transition-group/TransitionGroup";
import Nav from "./feature/nav/container";
import List from "./feature/list/container/List"; // ES6

class App extends React.Component {

    render() {
        let {classes} = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline/> {/* reset css for all devices */}
                <Nav/>
                <List/>
            </div>
        );
    }
}

const DispatchStateToProps = state => ({});

export default compose(
    withRouter,
    connect(
        DispatchStateToProps,
    ),
    withStyles(styles)
)(App);
