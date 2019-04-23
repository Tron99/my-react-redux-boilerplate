import { createStore, applyMiddleware ,combineReducers} from 'redux';
import thunk from 'redux-thunk' 
import { logger } from 'redux-logger';

const initialState = {};
const reducers = [];

const store = createStore(combineReducers({...reducers}),initialState, applyMiddleware(thunk, logger));

export default store;