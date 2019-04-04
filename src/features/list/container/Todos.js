import React from "react";
import TodosPresentational from "../presentational/Todos";
import {getAllTodo} from "../store/Action";
import {connect} from "react-redux";
import Header from "./Header";

class Todos extends React.Component {
    componentDidMount() {
        this.props.getAllTodo();
    }

    render() {
        
        return (
            <>
                <Header history={this.props.history} todos={true} classes={this.props.classes}/>
                <TodosPresentational todos={this.props.todo_list} history={this.props.history} classes={this.props.classes}/>
            </>
            );
    }
}

const MapPropsToState = state => ({
    todo_list: state.todo.todo_list,
    todo_request_success: state.todo.todo_request_success,
    todoActionRequest: state.todo.todoActionRequest
});
export default connect(MapPropsToState, {getAllTodo})(Todos);