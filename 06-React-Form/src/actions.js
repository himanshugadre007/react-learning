export const SET_CURRENT_POST = 'SET_CURRENT_POST';
export const ADD_POST = 'ADD_POST';

export const setCurrentPost = post => ({
  type: SET_CURRENT_POST,
  payload: post,
});

export const addPost = post => ({
  type: ADD_POST,
  payload: post,
});