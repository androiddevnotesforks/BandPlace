import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./root";
import { login, logout, signup } from "./actions/session_actions";



document.addEventListener("DOMContentLoaded", () => {

        [window.login, window.logout, window.signup] = [login, logout, signup];
    
    const rootEl = document.getElementById('root');

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id, currentUserType: window.currentUser.is_artist }
        };
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }

        window.getState = store.getState;
        window.dispatch = store.dispatch;
    
    ReactDOM.render(<Root store={store} />, rootEl);
})