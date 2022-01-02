import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { login, logout, signup } from "./actions/session_actions";



document.addEventListener("DOMContentLoaded", () => {

    [window.login, window.logout, window.signup] = [login, logout, signup];
    
    const rootEl = document.getElementById('root');
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store} />, rootEl);
})