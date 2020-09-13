import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducres from './reducres/index';

const middlewares = [thunk, logger];

const store = createStore(reducres, applyMiddleware(...middlewares));

export default store;
