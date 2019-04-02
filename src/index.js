import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./config/ReduxThunkConfig";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {persistStore} from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import  theme from "./config/MaterialUiConfig";

const store = configureStore();
let persistor = persistStore(store);

ReactDOM.render(
    
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <App />
                </Router>
            </PersistGate>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
