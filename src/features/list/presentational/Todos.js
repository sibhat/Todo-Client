import React from "react";
import { List } from "@material-ui/core";
import Todo from "./Todo";


const Todos = ({todos, classes,history, ...rest}) => {
    function changeEditRoute(id) {
        history.push("/edit/"+id);
    }
    function changeDeleteRoute(id) {
        history.push("/delete/"+id);
    }
    function changeGetRoute(id) {
        history.push("/"+id);
    }
    return (
        <List component="ul" className={classes.list} >
            {
                todos.map(e => {
                    return <Todo todo={e} key={e.id}
                                 {...rest}
                                 classes={classes}
                                 changeEditRoute={changeEditRoute}
                                 changeDeleteRoute={changeDeleteRoute}
                                 changeGetRoute={changeGetRoute}
                    />
                })
            }
        </List>
    );
};

export default Todos;
