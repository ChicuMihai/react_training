import { createLogger } from 'redux-logger';
import { user } from './app/reducers/userreducer';
import { mathreducer } from './app/reducers/mathreducer';
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';






export const store = createStore(user, applyMiddleware(logger));