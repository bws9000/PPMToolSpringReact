import {GET_PROJECTS, GET_PROJECT, GET_DELETE} from '../actions/types';

const preloadedState = {
    projects: [],
    project: {}
}

export default function getProjectReducer(state = preloadedState, action){
    switch(action.type){
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case GET_PROJECT:
            return {
                ...state,
                project: action.payload
            }
        case GET_DELETE:
            return {
                ...state,
                projects: state.projects.filter(
                    project => project.projectIdentifier !== action.payload
                )
            }
        default:
            return state;
    }
}