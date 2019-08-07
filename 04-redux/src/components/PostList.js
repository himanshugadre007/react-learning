import React, { Component } from 'react';
import { connect } from 'react-redux';


class PostList extends Component {
  componentDidMount() {
    console.log('this.props = ', this.props);
  }

  renderPostList() {
    return this.props.postList.map(post => {
      return (
        <div key={post.id}>{post.title}</div>
      );
    });
  }


  render() {
    return(
      <div>
        <h4>PostList</h4>
        <div>{this.renderPostList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('state = ', state);
  return {
    postList: state.post
  };
}

PostList = connect(mapStateToProps)(PostList);

export default PostList;