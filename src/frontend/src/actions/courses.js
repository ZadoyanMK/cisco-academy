import axios from 'axios';
import {
    GET_COURSES, IS_LOADING
} from './types';

export const getCourses = () => dispatch => {
    dispatch({ type: IS_LOADING});
    axios.get(`/api/courses/`)
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_COURSES,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
}