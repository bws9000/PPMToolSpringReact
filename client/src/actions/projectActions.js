import axios from 'axios';
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT, GET_DELETE } from './types';

export const createProject = (project, history) => async dispatch => {
    try {
        await axios.post('/api/project', project)
        history.push('/dashboard');
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const getProjects = () => async dispatch => {
    const res = await axios.get('/api/project/all')
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    })
}

export const getProject = (id) => async dispatch => {
    const res = await axios.get(`/api/project/${id}`);
    dispatch({
        type: GET_PROJECT,
        payload: res.data
    })
}

export const deleteProject = id => async dispatch => {
    if(window.confirm("Confirm you want to delete everything in this project.")){
        await axios.delete(`/api/project/${id}`);
        dispatch({
            type: GET_DELETE,
            payload: id
        })
    }
}
