import { combineReducers } from "redux";
import contentErrorsReducer from "./content_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";
import usersErrorsReducer from "./users_errors_reducer";
import searchErrorsReducer from "./search_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    content: contentErrorsReducer,
    users: usersErrorsReducer,
    search: searchErrorsReducer
})

export default errorsReducer;