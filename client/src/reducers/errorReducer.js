import {GET_ERRORS} from '../actions/types';

const preloadedState = {};

export default function getErrorReducer(state = preloadedState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}