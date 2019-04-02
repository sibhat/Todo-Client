import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./feature/auth/store/reducer";
import todoReducer from "./feature/list/store/reducer";
import { persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

const enhancers = [];
const middleware = [thunkMiddleware];

if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === "function") {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"]
};
const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        user: authReducer,
        todo: todoReducer
    })
);
export default function configureStore(initialState) {
    return createStore(
        persistedReducer,
        initialState,
        composedEnhancers
    );
}
