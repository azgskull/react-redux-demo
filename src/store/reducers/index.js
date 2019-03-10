import counter from './counter';
import history from './history';
import { combineReducers } from 'redux';

const combinedReducers = combineReducers({
    ctr : counter,
    history : history
});

export default combinedReducers;