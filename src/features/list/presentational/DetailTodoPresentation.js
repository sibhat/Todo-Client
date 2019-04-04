import React from "react";
import {ListItem} from "@material-ui/core";
import Moment from 'react-moment';
import 'moment-timezone';
import Footer from "../container/Footer";

function DetailTodoPresentation({classes, todo,match, ...rest}) {
    return (
        <ListItem className={classes.todo_detail} >
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <Moment className={classes.todo_detail_date}>{todo.date}</Moment>
                <Footer  {...rest} todo={todo} match={match} classes={classes}/>
        </ListItem>
    );
}

export default DetailTodoPresentation;