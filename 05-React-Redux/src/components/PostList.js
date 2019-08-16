import React, { Component } from 'react';
import { connect } from 'react-redux';


class PostList extends Component {
  componentDidMount() {
    console.log('this.props = ', this.props);
  }

  onItemClick = post => {
    console.log('post = ', post);
    this.props.dispatch({
      type: 'SET_CURRENT_POST',
      payload: post,
    });
  }

  renderPostList() {
    return this.props.postList.map(post => {
      const style = 
        this.props.currentPost && this.props.currentPost.id === post.id ?
        { backgroundColor: '#ccc' } :
        {};
      return (
        <div
          key={post.id}
          onClick={() => this.onItemClick(post)}
          style={style}
        >
          {post.title}
        </div>
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
    postList: state.post.posts,
    currentPost: state.post.currentPost,
  };
}

PostList = connect(mapStateToProps)(PostList);

export default PostList;