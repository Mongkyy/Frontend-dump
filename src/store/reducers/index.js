import { combineReducers } from "redux";
import { userReducer } from "./dataUser";

// COmbine all states defined in each reducer folder
const rootReduer = combineReducers({
    userReducer,
});

export default rootReduer