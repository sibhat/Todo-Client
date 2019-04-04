import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "../features/auth/store/Reducer";
import todoReducer from "../features/list/store/Reducer";
import { persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native


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
