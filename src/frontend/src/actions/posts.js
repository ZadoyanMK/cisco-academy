import axios from 'axios';
import { 
    GET_POSTS, GET_POST, 
    IS_LOADING, IS_FETCHED, NOT_FOUND
} from '../actions/types.js';

//get posts
export const getPosts = () => dispatch => {
    dispatch({ type: IS_LOADING });

    axios.get('/api/posts?page=1')
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload: res.data.data
            })
        })
        .catch(err => {
            dispatch({ type: NOT_FOUND, payload: true });
        })
}

//get current post
export const getPostDetails = (id) => (dispatch, ownProps) => {
    dispatch({ type: IS_LOADING });

    axios.get(`/api/posts/${id}/`)
        .then(res => {
            dispatch({
                type: GET_POST,
                payload: res.data.data
            })
        })
        .catch(err => {
            dispatch({ type: NOT_FOUND, payload: true });
        })
}

export const setPostDetails = (ob) => (dispatch) => {
    dispatch({ type: IS_LOADING });

    dispatch({
        type: GET_POST,
        payload: ob
    })
}

export const isLoadng = (val) => dispatch => {
    dispatch({ type: IS_FETCHED, payload: val });
}

export const setPageNotFound = (val) => dispatch => {
    dispatch({ type: NOT_FOUND, payload: val });
}