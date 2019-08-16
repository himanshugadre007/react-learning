import postList from '../data/post-list';

const initialState = {
  posts: postList,
  currentPost: null,
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'SET_CURRENT_POST':
      return {
        ...state,
        currentPost: action.payload,
      };
    default:
      return state;
  }
}