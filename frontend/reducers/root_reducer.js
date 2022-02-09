import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import searchReducer from "./search_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    search: searchReducer,
    errors: errorsReducer,
    ui: uiReducer
})

export default rootReducer;