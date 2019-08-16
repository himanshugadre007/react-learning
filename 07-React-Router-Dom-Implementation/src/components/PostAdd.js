import React, { Component } from 'react';
import history from '../history';

class PostAdd extends Component {
  backToHome() {
    history.push('/');
  }

  render() {
    return (
      <div>
        <h4>PostAdd</h4>
        <button onClick={this.backToHome}>Back to Home</button>
      </div>
    );
  }
}

export default PostAdd;