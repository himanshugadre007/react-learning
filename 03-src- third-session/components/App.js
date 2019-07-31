import React, { Component, Fragment } from 'react';

import PostList from './PostList';
import PostForm from './PostForm';
import posts from '../data/posts';

class App extends Component {
  state = {
    posts,
    currentPost: {}
  };

  setCurrentPost = post => {
    this.setState({ currentPost: post });
  }

  savePost = postInfo => {
    // Add new post
    console.log('postInfo = ', postInfo);
    const len = this.state.posts.length;
    const newId = this.state.posts[len - 1].id + 1;
    const newPost = {
      id: newId,
      title: postInfo.title,
      author: postInfo.author,
    };
    this.setState({
      posts: [...this.state.posts, newPost]
    });
  }

  render() {
    return (
      <Fragment>
        <PostList
          posts={this.state.posts}
          setCurrentPost={this.setCurrentPost}
          currentPost={this.state.currentPost}
        />
        <PostForm
          savePost={this.savePost}
        />
      </Fragment>
    );
  }
}

export default App;