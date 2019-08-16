import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostEdit extends Component {
  componentDidMount() {
    console.log('this.props = ', this.props);
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h4>PostEdit</h4>
        <div>
          <Link to="/">Back to post list</Link>
        </div>
      </div>
    );
  }
}

export default PostEdit;