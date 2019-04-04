import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import styles from "./AuthJss";
import {
    Modal,
    Paper,
    FormControl,
    Avatar,
    Typography,
    FormControlLabel,
    InputLabel,
    Input,
    Button,
    Checkbox
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const AuthPresentation = ({handleSubmit, handleChange, state, classes, open, user_token, handleClose, handleOpen, signOut}) => {
    if(user_token)
        return <Button onClick={signOut} color={"secondary"}> Sign Out </Button >;
    return (

        <>
            <Button onClick={handleOpen} color={"secondary"}> SignIn / Register </Button >
            <Modal open={open} onClose={handleClose} className={classes.paper}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus onChange={handleChange}
                                   value={state.email}/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type="password" id="password" autoComplete="current-password"
                                   onChange={handleChange} value={state.password}/>
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign in
                        </Button>
                    </form>
                </Paper>
            </Modal>
        </>
    );
};

AuthPresentation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AuthPresentation);