import {
    SUCCESS_MESSAGE, ERROR_MESSAGE
} from '../actions/types'

const initialState = {
    message: {},
    status: null,
}

export default function(state=initialState, action) {
    switch(action.type){
        case ERROR_MESSAGE:
            return{
                ...state,
                message: action.payload.message,
                status: action.payload.status
            };
        default:
            return state;
    }
}