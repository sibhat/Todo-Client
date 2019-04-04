import React from "react";
import {withRouter} from "react-router-dom";
import { CssBaseline} from "@material-ui/core";


// import TransitionGroup from "react-transition-group/TransitionGroup";
import Nav from "./features/nav/container";
import List from "./features/list/container/"; // ES6

class App extends React.Component {

    render() {
        return (
            <div className={"root"}>
                <CssBaseline/> {/* reset css for all devices */}
                <Nav/>
                <List/>
            </div>
        );
    }
}


export default withRouter(App);
