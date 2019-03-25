import {
    GET_POSTS, GET_POST, 
    IS_LOADING, NOT_FOUND, IS_ON_DETAILS_PAGE
} from '../actions/types.js';

const initialState = {
    posts: [],
    postDetails: {},
    pagination: {},
    isLoading: true,
    isOnPage: false
}

export default function(state=initialState, action) {
    switch(action.type){
        case IS_LOADING:
            return{
                ...state,
                isLoading: action.payload ? action.payload : true,
                notFoundPage: false,
            }
        case IS_ON_DETAILS_PAGE:
            return{
                ...state,
                isOnPage: action.payload,
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
        default:
            return state;
    }
}