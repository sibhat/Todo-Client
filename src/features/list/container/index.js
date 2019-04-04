import React, {Component} from "react";
import {Route, withRouter} from "react-router-dom";
import {Paper, withStyles} from "@material-ui/core";
import DetailTodo from "./DetailTodo";
import Todos from "./Todos";
import useStyles from "../presentational/TodoJss";

class List extends Component {
    render() {
        return (
            <Paper className={this.props.classes.root}>
                <Route path={"/:id"} render={e => <DetailTodo {...e} classes={this.props.classes}/>}/>
                <Route exact path={"/"} render={e =>
                        <Todos  {...e} classes={this.props.classes}/>
                }/>
            </Paper>
        );
    }
}

export default withRouter(withStyles(useStyles)((List)));
