import axios from 'axios';

export const sendMessage = (title, descr) => dispatch => {
    let token = null;
    document.cookie.split(';').map(f => {
        if (f.indexOf('csrftoken') >= 0){
            token = f.trim().replace(/(?:(?:^|.*;\s*)csrftoken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        }
    })

    console.log(token);

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
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });
    
}