import {applyMiddleware, legacy_createStore } from "redux";
import allReducers from "./reducers";
import thunk from "redux-thunk";

import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true, // collapsed log messages
  duration: true, // log duration of each action
  timestamp: true, // log timestamps
});


const store = legacy_createStore(allReducers, logger);

store.getState();

export default store;