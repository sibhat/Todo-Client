import React, {Component} from "react";
import {createTodo, editTodo} from "../store/Action";
import {connect} from "react-redux";
import {Button, FormControl, Input, InputLabel, Modal} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {MuiPickersUtilsProvider, DatePicker} from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            date: new Date().getDate(),
            open: false
        };
    }

    componentDidMount() {
        if (this.props.editTodoProp) {
            let todo = {
                title: this.props.todo.title,
                description: this.props.todo.description,
                date: this.props.todo.date,
            };
            this.setState({...todo})
        }
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };
    handleDateChange = date => {
        this.setState({date: date});
    };
    todoAction = () => {
        if (this.props.editTodoProp) {
            this.editTodo();
           
        } else {
            this.addTodo();
        }
        this.handleClose();
    };
    editTodo = () => {
        let todo = {
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
        };
        this.props.editTodo(this.props.todo.id, todo);
    };
    addTodo = () => {
        let todo = {
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
        };
        this.props.createTodo(todo);
    };

    render() {
        let btnText = this.props.editTodoProp ? "Edit" : "Add Todo";
        return (
            <>
                <Button onClick={this.handleOpen} className={this.props.classes.btn}>{btnText}</Button>
                <Modal open={this.state.open} onClose={this.handleClose} className={this.props.classes.addTodo_modal}>
                    <form className={this.props.classes.form_add_todo} onSubmit={this.todoAction}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="Title">Title</InputLabel>
                            <Input value={this.state.title}
                                   name={"title"}
                                   onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            {/*<InputLabel htmlFor="description">Description</InputLabel>*/}
                            <TextField
                                value={this.state.description}
                                name={"description"}
                                onChange={this.handleChange}
                                // helperText="Description"
                                id="filled-multiline-flexible"
                                label="description"
                                variant="filled"
                                multiline
                                className={this.props.classes.text_add_todo}
                            />

                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    margin="normal"
                                    label="Date picker"
                                    value={this.state.date}
                                    onChange={this.handleDateChange}
                                />
                            </MuiPickersUtilsProvider>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>

                            <Button onClick={this.todoAction} className={this.props.classes.btn}>{btnText}</Button>
                        </FormControl>

                    </form>
                </Modal>
            </>
        );
    }
}

export default connect(
    null,
    {createTodo, editTodo}
)(AddTodo);
