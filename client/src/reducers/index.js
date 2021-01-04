import { combineReducers } from 'redux';
import getErrorReducer from './errorReducer';
import getProjectReducer from './projectReducer';

export default combineReducers(
    {
        errors: getErrorReducer,
        project: getProjectReducer
    }
);