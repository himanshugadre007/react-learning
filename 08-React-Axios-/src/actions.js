import api from './api';

export const SET_POSTS = 'SET_POSTS';
export const SET_CURRENT_POST = 'SET_CURRENT_POST';
export const ADD_POST = 'ADD_POST';
export const FETCH_POSTS = 'FETCH_POSTS';

export const setCurrentPost = post => ({
  type: SET_CURRENT_POST,
  payload: post,
});

export const addPost = post => ({
  type: ADD_POST,
  payload: post,
});

// export const setPosts = posts => ({
//   type: SET_POSTS,
//   payload: posts,
// });

export const fetchPosts = () => dispatch => {
  //api.put('posts')
  api.get('posts')
    .then(res => {
      dispatch({
        type: SET_POSTS,
        payload: res.data,
      });
    });
}
