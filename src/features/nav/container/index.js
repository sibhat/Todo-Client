import React, { Component } from "react";
import { me } from "../../auth/store/Action";
import { connect } from "react-redux";
import NavPresentational from "../presentational";
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    componentDidMount() {
        this.props.me();
    }
    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };
    render() {
        return <NavPresentational
            open={this.state.open}
            handleDrawerOpen={this.handleDrawerOpen}
            handleDrawerClose={this.handleDrawerClose}
        />;
    }
}

export default connect(
    null,
    { me }
)(Nav);
