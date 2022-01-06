import { getArtist } from "../util/user_api_util";

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

const fetchArtist = artistId => dispatch => (
    getArtist(artistId).then(user => dispatch(receiveUser(user)))
);

export { fetchArtist };