import {legacy_createStore } from "redux";
import allReducers from "./reducers";


const store = legacy_createStore(allReducers);
store.getState();

export default store;