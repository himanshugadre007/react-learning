import React, { Component } from 'react';

import PostList from './PostList';

class App extends Component {
  render() {
    return(
      <div>
        <div>App</div>
        <PostList/>
      </div>
    );
  }
}

export default App;