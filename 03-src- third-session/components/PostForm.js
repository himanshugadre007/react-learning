import React, { createRef } from 'react';

const PostForm = (props) => {
  const $title = createRef();
  const $author = createRef();
  
  const onSave = () => {
    const postInfo = {
      title: $title.current.value,
      author: $author.current.value,
    };
    props.savePost(postInfo);
  }

  const renderForm = () => {
    return (
      <div>
        <div>
          <label>Title: </label>
          <input type="text" ref={$title} />
        </div>
        <div>
          <label>Author: </label>
          <input type="text" ref={$author} />
        </div>
        <div>
          <button type="button" onClick={onSave}>Save</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h4>Post Form</h4>
      {renderForm()}
    </div>
  );
}

export default PostForm;