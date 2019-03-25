import {
    SUCCESS_MESSAGE, ERROR_MESSAGE
} from '../actions/types'

const initialState = {
    message: "",
}

export default function(state=initialState, action) {
    switch(action.type){
        case SUCCESS_MESSAGE:
            return{
                ...state,
                message: action.payload,
            };
        default:
            return state;
    }
}