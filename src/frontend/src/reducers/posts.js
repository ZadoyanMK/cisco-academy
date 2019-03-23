import {
    GET_POSTS, GET_POST, 
    IS_LOADING, NOT_FOUND
} from '../actions/types.js';

const initialState = {
    posts: [],
    postDetails: {},
    pagination: {},
    isLoading: true,
    notFoundPage: false,
}

export default function(state=initialState, action) {
    switch(action.type){
        case IS_LOADING:
            return{
                ...state,
                isLoading: true,
                notFoundPage: false,
            }
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload.data,
                pagination: action.payload.pagination,
                isLoading: false,
            };
        case GET_POST:
            return {
                ...state,
                postDetails: action.payload,
                isLoading: false,
            };
        case NOT_FOUND:
            return {
                ...state,
                notFoundPage: true,
                isLoading: false,
            };
        default:
            return state;
    }
}