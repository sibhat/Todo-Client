import React from "react";
import {Route} from "react-router-dom";
import AddTodo from "./AddTodo";
import {Button} from "@material-ui/core";
import {getAllTodo, getTodoById} from "../store/Action";
import {connect} from "react-redux";
class Header extends React.Component{
    backHistoryFunc = () =>{
        this.props.history.goBack();
    };
    refreshAllTodos =()=> {
        this.props.getAllTodo();
    };
    refreshSingleTodo = id => {
        this.props.getTodoById(id);
    };
    render() {
        let {classes} = this.props;
        return <div className={classes.root_header}>
            <Route exact path={"/"} render={e =>
                <>
                    <Button onClick={this.refreshAllTodos} className={classes.btn}>Refresh</Button>
                    <AddTodo todos={this.props.todo_list} {...e} classes={classes}/>
                </>} />
                <Route exact path={"/:id"} render={p =>
                    <>
                        <Button onClick={this.backHistoryFunc} className={classes.btn}>Back</Button>
                        <Button onClick={() => {
                            this.refreshSingleTodo(p.match.params.id)
                        }} className={classes.btn}>Refresh</Button>
                    </>
                }/>
              </div>
    }
}
export default connect(null, {getAllTodo, getTodoById})(Header);