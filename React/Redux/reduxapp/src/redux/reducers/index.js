import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import counterReducer from "./counterReducer";
import MovieReducer from "./movieReducer";


const allReducers = combineReducers({
    user:UserReducer,
    count:counterReducer,
    movies:MovieReducer
})

export default allReducers;