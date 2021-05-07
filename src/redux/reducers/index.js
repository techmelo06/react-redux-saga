import { combineReducers } from "redux";

// REDUCERS
import users from "./users";

const rootReducer = combineReducers({
    users: users,
});

export default rootReducer;