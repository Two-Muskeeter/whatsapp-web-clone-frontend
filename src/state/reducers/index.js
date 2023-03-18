import { combineReducers } from 'redux';
import connectionReducer from './connectionReducer';

const reducers = combineReducers({
    connect: connectionReducer
})
export default reducers