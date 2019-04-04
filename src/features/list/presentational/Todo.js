import React from "react";
import {  ListItem, Checkbox } from "@material-ui/core";


function Todo({classes, todo, changeEditRoute,changeDeleteRoute, changeGetRoute }) {
    const [checked, setChecked] = React.useState(false);

    const handleToggle = () => {
        setChecked(!checked);
    };

    return (
        <ListItem button className={classes.todo} >
            <Checkbox checked={checked} tabIndex={-1} disableRipple onClick={handleToggle}/>
            <p onClick={() => changeGetRoute(todo.id)}>{todo.title}</p>
        </ListItem>
    );
}

export default Todo;
