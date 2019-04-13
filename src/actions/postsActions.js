import { FETCH_POSTS, NEW_POST, DELETE_POST } from './types';

export const fetchPosts = () => dispatch => {
    
    console.log('fetching...');
    
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts 
    }));

}

export const createPost = (postData) => dispatch => {
    
    console.log('creating post...');

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
    }));

}

export const deletePost = (postId) => dispatch => {
    
    console.log('deleting post...');

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE'
    })
    .then(res => {
        dispatch({
            type: DELETE_POST,
            payload: {
                postId: postId
            }
        });
    });

}