import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';

import app from "./app";

let rootReducer = combineReducers({
    app,
});

const middleWare = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleWare));

export default store;
