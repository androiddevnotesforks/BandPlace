import { signupAjax, loginAjax, logoutAjax } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errorsArr) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errorsArr
});

const clearErrors = () => ({
    type: CLEAR_ERRORS
})

const login = user => dispatch => (
    loginAjax(user)
        .then(user => dispatch(receiveUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)))
);

const logout = () => dispatch => (
    logoutAjax()
        .then(user => dispatch(logoutCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)))
);

const signup = user => dispatch => (
    signupAjax(user)
        .then(user => dispatch(receiveUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)))
);

const resetErrors = () => dispatch(clearErrors());

export { login, logout, signup , receiveErrors, resetErrors };