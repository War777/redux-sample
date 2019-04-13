import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

// This is the rootReducer used in store.js:10
export default combineReducers({
    posts: postsReducer
});