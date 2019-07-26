import React, { Component } from 'react';

import { userList } from './data/userData';
import UserList from './UserList';
import UserDetails from './UserDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  onUserSelection(user) {
    console.log('this instanceof App = ', this instanceof App);
    console.log('user = ', user);
    this.setState({ currentUser: user });
  }

  render() {
    return (
      <div>
        <UserList users={userList} onUserClick={this.onUserSelection.bind(this)} />
        <UserDetails user={this.state.currentUser} />
      </div>
    );
  }
}

export default App;