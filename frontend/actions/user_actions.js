import { RECEIVE_USER, receiveUser } from "./session_actions";

const fetchUser = userId => dispatch => (
    dispatch(receiveUser(userId))
)

export { fetchUser };