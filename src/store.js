import { createStore, applyMiddleware ,combineReducers} from 'redux';
import thunk from 'redux-thunk' 
import { logger } from 'redux-logger';

const initialState = {state:'state'};
const rootReducer = combineReducers({
    //reducers here
});

const store = createStore(rootReducer,initialState, applyMiddleware(thunk, logger));

export default store;