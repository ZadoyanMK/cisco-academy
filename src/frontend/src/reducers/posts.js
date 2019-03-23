import {
    GET_POSTS, GET_POST, 
    IS_LOADING, IS_FETCHED, NOT_FOUND
} from '../actions/types.js';

const initialState = {
    posts: [],
    postDetails: {},
    isLoading: false,
    isFetched: false,
    notFoundPage: false,
}

export default function(state=initialState, action) {
    switch(action.type){
        case IS_LOADING:
            return{
                ...state,
                isLoading: true,
            }
        case IS_FETCHED:
            return{
                ...state,
                isFetched: action.payload,
            }
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
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
                notFoundPage: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
}