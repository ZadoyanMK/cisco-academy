import axios from 'axios';
import { 
    GET_POSTS, GET_POST, 
    IS_LOADING, NOT_FOUND, IS_ON_DETAILS_PAGE, ERROR_MESSAGE
} from '../actions/types.js';

//get posts
export const getPosts = (page) => (dispatch, ownProps) => {
    dispatch({ type: IS_LOADING});
    axios.get(`/api/${ownProps().global.language}/posts?page=${page}`)
        .then(res => {
            
            dispatch({
                type: GET_POSTS,
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

//get current post
export const getPostDetails = (id) => (dispatch, ownProps) => {
    dispatch({ type: IS_LOADING});

    axios.get(`/api/${ownProps().global.language}/posts/${id}/`)
        .then(res => {
            if (res.data.data == null){
                dispatch({ type: NOT_FOUND, payload: true});
            } else {
                dispatch({
                    type: GET_POST,
                    payload: res.data.data
                })
            }
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

export const setPostDetails = (ob) => (dispatch) => {
    dispatch({ type: IS_LOADING});

    dispatch({
        type: GET_POST,
        payload: ob
    })
}

export const setIsOnDetailsPage = (v) => dispatch => {
    dispatch({
        type: IS_ON_DETAILS_PAGE,
        payload: v
    })
}