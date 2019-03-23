import { combineReducers } from 'redux';
import posts from './posts';
import courses from './courses';

export default combineReducers({
    posts,
    courses,
});
