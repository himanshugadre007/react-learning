import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PostList extends Component {
  render() {
    return (
      <div>
        <h4>PostList</h4>
        <div>
          <Link to="/add">Add Post</Link>
        </div>
        <div>
          <Link to="/edit/1">Edit Post</Link>
        </div>
      </div>
    );
  }
}

export default PostList;