import React from 'react';

const PostList = ({ posts, setCurrentPost, currentPost }) => {
  const renderList = () => {
    return  posts.map(post => {
      const style =
        currentPost.id === post.id ?
          { backgroundColor: 'grey' } :
          {};

      return (
        <div
          key={post.id}
          onClick={() => setCurrentPost(post)}
          style={style}
        >
          {post.title}
        </div>
      );
    });
  }
  
  return (
    <div>
      <h4>Post List</h4>
      {renderList()}
    </div>
  );
}

export default PostList;