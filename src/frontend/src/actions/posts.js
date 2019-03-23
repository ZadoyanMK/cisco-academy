import axios from 'axios';
import { 
    GET_POSTS, GET_POST, 
    IS_LOADING, NOT_FOUND
} from '../actions/types.js';

//get posts
export const getPosts = (page) => dispatch => {
    dispatch({ type: IS_LOADING});
    axios.get(`/api/posts?page=${page}`)
        .then(res => {
            
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
}

//get current post
export const getPostDetails = (id) => (dispatch, ownProps) => {
    dispatch({ type: IS_LOADING});

    axios.get(`/api/posts/${id}/`)
        .then(res => {
            if (res.data.data == null){
                dispatch({ type: NOT_FOUND});
            } else {
                dispatch({
                    type: GET_POST,
                    payload: res.data.data
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
}

export const setPostDetails = (ob) => (dispatch) => {
    dispatch({ type: IS_LOADING});

    dispatch({
        type: GET_POST,
        payload: ob
    })
}
