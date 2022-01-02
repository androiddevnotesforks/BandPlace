import { signupAjax, loginAjax, logoutAjax } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errorsArr) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errorsArr
})

const login = user => dispatch => (
    loginAjax(user)
        .then(user => dispatch(receiveCurrentUser(user)))
);

const logout = () => dispatch => (
    logoutAjax()
        .then(user => dispatch(logoutCurrentUser(user)))
);

const signup = user => dispatch => (
    signupAjax(user)
        .then(user => dispatch(receiveCurrentUser(user)))
);

export { login, logout, signup, receiveErrors };