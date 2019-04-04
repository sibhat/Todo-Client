
import React, { Component } from "react";
import { connect } from "react-redux";

const ProtectedPages = ChildComponent => {
    class ProtectedChildComponent extends Component {
        render() {
            return this.props.is_authenticated ? (
                 <ChildComponent {...this.props} />
            ) : null;
        }
    }
    
    const MapPropsToState = state => ({
        is_authenticated: state.user.user_authenticated_success
    });

    return connect(MapPropsToState)(ProtectedChildComponent);
};

export default ProtectedPages;
