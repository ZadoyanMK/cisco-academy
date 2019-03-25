import { 
    SET_LANGUAGE, NOT_FOUND
 } from '../actions/types';

const initialState = {
    language: 'en',
    notFoundPage: false,
}

export default function(state=initialState, action) {
    switch(action.type){
        case SET_LANGUAGE:
            return{
                ...state,
                language: action.payload
            };
        case NOT_FOUND:
            return {
                ...state,
                notFoundPage: action.payload,
            };
        default:
            return state;
    }
}