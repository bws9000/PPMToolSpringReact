import {GET_PROJECTS} from '../actions/types';

const preloadedState = {
    projects: [],
    project: {}
}

export default function(state = preloadedState, action){
    switch(action.type){
        case GET_PROJECTS:
            return {
                ...state,
                projects:action.payload
            }
        default:
            return state;
    }
}