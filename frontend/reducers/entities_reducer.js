import { combineReducers } from "redux";
import releasesReducer from "./releases_reducer";
import songsReducer from "./songs_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    releases: releasesReducer,
    songs: songsReducer
});

export default entitiesReducer;