import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import counterReducer from "./counterReducer";


const allReducers = combineReducers({
    user:UserReducer,
    count:counterReducer
})

export default allReducers;