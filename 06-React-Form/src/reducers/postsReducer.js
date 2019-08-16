import postList from '../data/post-list';
import { SET_CURRENT_POST, ADD_POST } from '../actions';

const initialState = {
  posts: postList,
  currentPost: null,       
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload,
      };
    case ADD_POST:
      const len = state.postList.length;
      const newId = state.postList[len - 1].id + 1;
      const newPost = {
        id: newId,
        ...action.payload
      };
      const newPostList = [...state.posts, newPost];
      return {
        ...state,
        posts: newPostList,
      };
    default:
      return state;
  }
}