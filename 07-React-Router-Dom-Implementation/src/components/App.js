import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import histroy from '../history';
import PostList from './PostList';
import PostAdd from './PostAdd';
import PostEdit from './PostEdit';

class App extends Component {
  render() {
    return (
      <div>
        <div>Header</div>
        <Router history={histroy}>
          <Route path="/" exact component={PostList} />
          <Route path="/add" component={PostAdd} />
          <Route path="/edit/:id" component={PostEdit} />
        </Router>
        <div>Footer</div>
      </div>
    );
  }
}

export default App;