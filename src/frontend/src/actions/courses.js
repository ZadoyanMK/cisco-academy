import axios from 'axios';
import {
    GET_COURSES, IS_LOADING
} from './types';

export const getCourses = () => (dispatch, ownProps) => {
    dispatch({ type: IS_LOADING});
    axios.get(`/api/${ownProps().global.language}/courses/`)
        .then(res => {
            dispatch({
                type: GET_COURSES,
                payload: res.data
            })
        })
        .catch(err => {
            // console.log(err);
            dispatch({
                type: ERROR_MESSAGE,
                payload: {
                    message: err.response.data,
                    status: err.response.status
                }
            })
        })
}