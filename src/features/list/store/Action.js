import axios from "../../../config/AxiosConfig";
import * as actionType from "./ActionTypes";

const URL = `/api/todos`;
const getAllTodoHandler = (data) => ({
    type: actionType.LIST_TODO_SUCCESS,
    payload: data
});
const getOneTodoHandler = (data) => ({
    type: actionType.GET_TODO_SUCCESS,
    payload: data
});
const editTodoHandler = data => ({
    type: actionType.EDIT_TODO_SUCCESS,
    payload: data
});
const addTodoHandler = (id) => ({
    type: actionType.ADD_TODO_SUCCESS,
    payload: id
});
const deleteTodoHandler = (id) => ({
    type: actionType.DELETE_TODO_SUCCESS,
    payload: id
});
const genericTodoErrorHandler = (type, payload) => ({
    type,
    payload
});

export const getAllTodo = () => dispatch => {
    dispatch({type: actionType.LIST_TODO_REQUEST});
    axios.get(URL)
        .then(result => {
            dispatch(getAllTodoHandler(result.data));
        })
        .catch(error => {
            let errormsg = error.response ? error.response.data.error : error.data;
            dispatch(genericTodoErrorHandler(actionType.LIST_TODO_FAIL, errormsg));
        });
};

export const getTodoById = (id) => dispatch => {
    dispatch({type: actionType.GET_TODO_REQUEST});
    axios.get(`${URL}/${id}`)
        .then(result => {
            dispatch(getOneTodoHandler(result.data));
        })
        .catch(error => {
            let errormsg = error.response ? error.response.data.error : error.data;
            dispatch(genericTodoErrorHandler(actionType.GET_TODO_FAIL, errormsg));
        });
};
export const editTodo = (id, data) => dispatch => {
    dispatch({type: actionType.EDIT_TODO_REQUEST});
    axios.patch(`${URL}/${id}`, data)
        .then(result => {
            dispatch(editTodoHandler(result.data));
        })
        .catch(error => {
            let errormsg = error.response ? error.response.data.error : error.data;
            dispatch(genericTodoErrorHandler(actionType.EDIT_TODO_FAIL, errormsg));
        });
};

export const createTodo = (data) => dispatch => {
    dispatch({type: actionType.ADD_TODO_REQUEST});
    axios.post(`${URL}`, data)
        .then(result => {
            dispatch(addTodoHandler(result.data));
        })
        .catch(error => {
            let errormsg = error.response ? error.response.data.error : error.data;
            dispatch(genericTodoErrorHandler(actionType.ADD_TODO_FAIL, errormsg));
        });
};

export const deleteTodoById = (id) => dispatch => {
    dispatch({type: actionType.DELETE_TODO_REQUEST});
    axios.delete(`${URL}/${id}`)
        .then(result => {
            dispatch(deleteTodoHandler(result.data));
        })
        .catch(error => {
            let errormsg = error.response ? error.response.data.error : error.data;
            dispatch(genericTodoErrorHandler(actionType.DELETE_TODO_FAIL, errormsg));
        });
};
