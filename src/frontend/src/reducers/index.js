import { combineReducers } from 'redux';
import posts from './posts';
import courses from './courses';
import global from './global'
import err_message from './err_message';
import success_message from './success_message';

export default combineReducers({
    posts,
    courses,
    global,
    err_message,
    success_message
});
