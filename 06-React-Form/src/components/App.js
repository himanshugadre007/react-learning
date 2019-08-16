import React, { Component } from 'react';

import PostList from './PostList';
import PostForm from './PostForm';

class App extends Component {
  render() {
    return(
      <div>
        <div>App</div>
        <PostList/>
        <PostForm />
      </div>
    );
  }
}

export default App;