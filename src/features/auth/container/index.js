import React, { Component } from "react";
import { signIn, register, me, logout } from "../store/Action";
import { connect } from "react-redux";
import AuthPresentation from "../presentational/";
import CircularProgress from '@material-ui/core/CircularProgress';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            open: false,
        };
    }

    handleChange= (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = (event) =>{
        event.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.signIn(user);
    };
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        // check if there is trailer
        if (this.props.user_request) {
            return (
                <div>
                    <CircularProgress
                        // className={classes.progress}
                        color="secondary"
                    />
                </div>
            );
        }
        return (
            <AuthPresentation
                state={this.state}
                className={this.props.className}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                user_request={this.props.user_request}
                open={this.state.open}
                handleClose={this.handleClose}
                handleOpen={this.handleOpen}
                signOut={this.props.logout}
                user_token={this.props.user_token}
            />
        );
    }
}
const MapPropsToState = state => {
    return {
        user_request: state.user.user_request,
        user_token: state.user.user_token
    };
};
export default connect(MapPropsToState, { signIn, register, me, logout})(Auth);
