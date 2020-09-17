import {combineReducers} from 'redux';
import {playerReducer} from "./playerReducer";
import {starterReducer} from "./starterReducer";


export const reducers = combineReducers({
    playerReducer,
    starterReducer
});