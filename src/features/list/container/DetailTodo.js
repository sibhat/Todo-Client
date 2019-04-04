import React, {Component} from "react";
import {getTodoById, editTodo, deleteTodoById} from "../store/Action";
import {connect} from "react-redux";
import DetailTodoPresentation from "../presentational/DetailTodoPresentation";
import Header from "./Header";

class DetailTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.getTodoById(this.props.match.params.id);
    }
  
    render() {
        let {todo, userId, classes} = this.props;
        return (
                <>
                    <Header history={this.props.history} classes={this.props.classes}/>
                    <DetailTodoPresentation match={this.props.match} history={this.props.history} todo={todo} classes={classes} userId={userId} />
                </>
                );
    }
}

const MapPropsToState = state => {
    return {
        todo: state.todo.todoById,
        userId: state.user.user_info.id
    };
};
export default connect(
    MapPropsToState,
    {getTodoById, editTodo, deleteTodoById}
)(DetailTodo);
