import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { setCurrentPost, setPosts } from '../actions';
import { setCurrentPost, fetchPosts } from '../actions';
import api from '../api';

class PostList extends Component {
  componentDidMount() {
    console.log('this.props = ', this.props);
    // api
    //   .get('posts')
    //   .then(res => {
    //     console.log('res = ', res);
    //     this.props.setPosts(res.data);
    //   });
    this.props.fetchPosts();
  }

  onItemClick = post => {
    console.log('post = ', post);
    // this.props.dispatch({
    //   type: 'SET_CURRENT_POST',
    //   payload: post,
    // });
    this.props.setCurrentPost(post);
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

const mapDispatchToProps = {
  setCurrentPost,
  fetchPosts,
  // setPosts,
}

PostList = connect(mapStateToProps, mapDispatchToProps)(PostList);

export default PostList;