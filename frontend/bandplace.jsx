import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import { signupAjax, loginAjax, logoutAjax } from "./util/session_api_util";



document.addEventListener("DOMContentLoaded", () => {
    [window.signupAjax, window.loginAjax, window.logoutAjax] =   [signupAjax, loginAjax, logoutAjax];
    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root />, rootEl);
})