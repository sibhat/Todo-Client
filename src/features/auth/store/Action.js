import axios from "../../../config/AxiosConfig";
import * as actionType from "./ActionTypes";

const getTokenHandler = token => ({
    type: actionType.USER_TOKEN_SUCCESS,
    payload: token
});
const getTokenFailHandler = error => ({
    type: actionType.USER_TOKEN_FAIL,
    payload: error
});
const getUserInfoHandler = token => ({
    type: actionType.USER_INFO_SUCCESS,
    payload: token
});
const getUserInfoFailHandler = error => ({
    type: actionType.USER_INFO_FAIL,
    payload: error
});


export const signIn = (data) => dispatch => {
    dispatch({ type: actionType.USER_TOKEN_REQUEST });
    return axios.post(
        `/auth/local/login`, data
    )
        .then(result => {
            dispatch(getTokenHandler(result.data));
        })
        .catch(error => {
            let errormsg = error.response ? error.response.data.error : error.data;
            dispatch(getTokenFailHandler(errormsg));
        });
};

export const register = (data) => dispatch => {
    dispatch({ type: actionType.USER_TOKEN_REQUEST });
    return axios
        .post(
            `/auth/local/register`, data
        )
        .then(result => {
            dispatch(getTokenHandler(result.data));
        })
        .catch(error => {
            let errormsg = error.response ? error.response.data.error : error.data;
            dispatch(getTokenFailHandler(errormsg));
        });
};
export const me = () => dispatch => {
    dispatch({ type: actionType.USER_INFO_REQUEST });
    return axios
        .get(
            `/api/users/me`
        )
        .then(result => {
            dispatch(getUserInfoHandler(result.data));
        })
        .catch(error => {
            let errormsg = error.response ? error.response.data.error : error.data;
            dispatch(getUserInfoFailHandler(errormsg));
        });
};
export const logout = () => dispatch => {
    dispatch({ type: actionType.USER_INFO_LOGOUT });
};
