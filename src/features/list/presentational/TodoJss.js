const  useStyles = theme => {
    return {
        root: {
            margin: "auto",
            width: "500px",
            marginTop: "20%",
            padding: "15px"
        },
        root_header:{
            width: "100%",
            padding: "5px 5px 15px 5px",
            display: "flex",
            justifyContent: "space-between",
        },
        footer_root:{
            width: "100%",
            padding: "15px 5px 5px 5px",
            display: "flex",
            justifyContent: "space-between",
        },
        list:{
            marginTop: "50px",
        },
        btn:{
            float: "right",
            backgroundColor:  theme.palette.primary.main,
            color: theme.palette.secondary.main
        },
        addTodo_modal:{
            // backgroundColor: theme.palette.background.paper,
        },
        form_add_todo:{
            margin: "auto",
            borderRadius: "10px",
            padding: "15px",
            maxWidth: "500px",
            marginTop: "100px",
            border: "1px solid grey" || theme.palette.background.paper,
            outline: "none",
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary
        },
        todo:{
            border: "1px solid",
            margin: "10px 0",
            display:"flex",
            justifyContent: "space-around",
        },
        todo_detail:{
            display: "block"
        },
        todo_detail_date:{
            color: theme.palette.text.hint
        }

    };
};
export default useStyles;