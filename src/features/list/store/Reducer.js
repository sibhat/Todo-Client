import * as actionType from "./ActionTypes";

const initialState = {
    todo_request_success: false,
    todo_list: [],
    todoById: {},
    todoError: null,
    todoActionRequest: false,
};
export default (state = initialState, action) => {
    switch (action.type) {

        case actionType.ADD_TODO_SUCCESS:
            return {
                ...state,
                todoActionRequest: false,
                todo_list: [...state.todo_list, ...action.payload],
                todo_request_success: true,
                todoById: {},
                todoError: null,
            };
        case actionType.LIST_TODO_SUCCESS:
            return {
                ...state,
                todoActionRequest: false,
                todo_list: action.payload,
                todo_request_success: true,
                todoById: {},
                todoError: null,
            };
        case actionType.GET_TODO_SUCCESS:
        case actionType.EDIT_TODO_SUCCESS:
            return {
                ...state,
                todoActionRequest: false,
                todoById: action.payload[0] || action.payload,
                todo_request_success: true,
                todoError: null,
            };
        case actionType.DELETE_TODO_SUCCESS:
            let filteredTodo_list = state.todo_list.filter(e => e.id !== Number(action.payload.id));
            return {
                ...state,
                todoActionRequest: false,
                todo_list: filteredTodo_list,
                todo_request_success: true,
                todoError: null,
            };
        case actionType.LIST_TODO_FAIL:
        case actionType.GET_TODO_FAIL:
        case actionType.EDIT_TODO_FAIL:
        case actionType.DELETE_TODO_FAIL:
        case actionType.ADD_TODO_FAIL:
            return {
                ...state,
                todoActionRequest: false,
                todoError: action.payload,
                todo_request_success: false,
                todo_list: [],
                todoById: {},
            };
        case actionType.LIST_TODO_REQUEST:
        case actionType.GET_TODO_REQUEST:
        case actionType.ADD_TODO_REQUEST:
        case actionType.EDIT_TODO_REQUEST:
        case actionType.DELETE_TODO_REQUEST:
            return {
                ...state,
                todo_request_success: false,
                todoActionRequest: true,
                todoError: null,
                todoById: {},
            };
        default:
            return state;
    }
};
