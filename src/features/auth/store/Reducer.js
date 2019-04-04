import * as actionType from "./ActionTypes";

const initialState = {
    user_token: null,
    user_request: false,
    user_authenticated_success: false,
    user_authenticated_error: null,
    user_info: {},
};
export default (state = initialState, action) => {
    switch (action.type) {
        case actionType.USER_TOKEN_SUCCESS:
            localStorage.setItem("user_token", action.payload.token);
            return {
                ...state, user_request: false, 
                user_token: action.payload.token, 
                user_authenticated_error: null,
                user_authenticated_success: false,

            };
        case actionType.USER_TOKEN_FAIL:
        case actionType.USER_INFO_FAIL:
            return {...state, user_request: false, 
                user_info: {}, user_authenticated_error: action.payload,
                user_authenticated_success: false,
            };
        case actionType.USER_INFO_SUCCESS:
            return {
                ...state, user_authenticated_success: true, 
                user_request: false, user_info: action.payload, 
                user_authenticated_error: null,
            };
        case actionType.USER_TOKEN_REQUEST:
        case actionType.USER_INFO_REQUEST:
            return{...state, user_request: true,
                user_authenticated_success: false,
            };
        case actionType.USER_INFO_LOGOUT:
            localStorage.removeItem("user_token");
            return {
                ...state, user_token: null,
                user_authenticated_success: false,
                user_authenticated_error: null,
                user_request: false,
                user_info: {},
            };
        default:
            return state;
    }
};
