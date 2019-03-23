import { GET_COURSES, IS_LOADING } from '../actions/types';

const initialState = {
    courses: [],
    isLoading: true,
}

export default function(state=initialState, action) {
    switch(action.type){
        case IS_LOADING:
            return{
                ...state,
                isLoading: true,
            };
        case GET_COURSES:
            return{
                ...state,
                isLoading: false,
                courses: action.payload
            };
        default:
            return state;
    }
}