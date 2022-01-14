import { getArtist, patchUser } from "../util/user_api_util";


export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

const receiveErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

const fetchAllIds = () => (
    $.ajax({
        method: 'GET',
        url: '/api/users'
    })
)

const fetchArtist = artistId => dispatch => (
    getArtist(artistId).then(user => dispatch(receiveUser(user)))
);

const updateUser = userData => dispatch => (
    patchUser(userData).then(user => dispatch(receiveUser(user)), errors => dispatch(receiveErrors(errors.statusText)))
);

export { fetchArtist, updateUser, fetchAllIds };