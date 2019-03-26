import axios from 'axios';
import { 
    SET_LANGUAGE, NOT_FOUND, IS_LOADING,
    SUCCESS_MESSAGE, ERROR_MESSAGE
} from './types';

const messages = {
    mail: {
        ok:{
            'en': "Message was sent!",
            'ua': "Повідомлення надіслано!"
        },
        err: {
            'en': "Something wrong!\nMessage was not sent!",
            'ua': "Щось пішло не так!\nПовідомлення надіслано!"
        }
    }
}

export const sendMessage = (title, descr) => (dispatch, ownProps) => {
    let token = null;
    document.cookie.split(';').map(f => {
        if (f.indexOf('csrftoken') >= 0){
            token = f.trim().replace(/(?:(?:^|.*;\s*)csrftoken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        }
    })

    axios.post(`/send-message/`, {
        title: title,
        description: descr
    }, 
    {
        "Content-Type": "application/json",
        headers: {
            "X-CSRFToken": token
        }
    })
    .then((res) => {
        dispatch({
            type: SUCCESS_MESSAGE,
            payload: messages.mail.ok[ownProps().global.language]
        })
    })
    .catch(err => {
        console.log(err);
        dispatch({
            type: ERROR_MESSAGE,
            payload: {
                message: messages.mail.err[ownProps().global.language],
                status: err.response.status
            }
        })
    });
    
}

export const setLanguage = (lang) => (dispatch) => {
    if (lang == 'en' || lang == 'ua'){
        dispatch({
            type: SET_LANGUAGE,
            payload: lang
        });
    } else {
        dispatch({
            type: IS_LOADING,
            payload: false
        });
        dispatch({ type: NOT_FOUND, payload: true});
    }    
}

export const setNotFound = (val) => dispatch => {
    dispatch({ type: NOT_FOUND, payload: val});
}

export const setMessage = (val) => dispatch => {
    dispatch({
        type: SUCCESS_MESSAGE,
        payload: val
    })
}