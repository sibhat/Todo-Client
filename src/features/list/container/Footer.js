import React, {Component} from "react";
import AddTodo from "../container/AddTodo";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {deleteTodoById} from "../store/Action";
import ProtectedPages from "../../auth/container/ProtectedPages";

class Footer extends Component {
    deleteTodo = (id) =>{
        this.props.deleteTodoById(id);
        this.props.history.push("/");
    };
    render(){
    let {todo, classes, userId} = this.props;
        return (
            <section className={classes.footer_root}>
                {
                    userId === todo.user_id ? 
                        <>
                            <AddTodo editTodoProp={true} todo={todo} classes={classes}/>
                            <Button onClick={() => this.deleteTodo(todo.id)} className={classes.btn} >Delete</Button> 
                        </>
                    : null
                }
            </section>
        )
    }
}
const MapStateToProps = state=>({
    todo: state.todo.todoById,
    // userId: state.user.user_info.id
});
export default connect(MapStateToProps, {deleteTodoById})(ProtectedPages(Footer));