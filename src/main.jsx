import React from "react";
import ReactDOM from "react-dom";
import Router from "./layouts/Router/index";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history} store={store} />
        </Provider>
        ,
    </React.StrictMode>,
    document.getElementById("root")
);
