import React, { Component, createRef } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.authorRef = createRef();
  }
  
  onSave = () => {
    const title = this.titleRef.current.value;
    const author = this.authorRef.current.value;
    console.log('title = ', title);
    console.log('author = ', author);
    
  }
  
  renderForm() {
    return (
      <div>
        <div>
          <label>Title</label>
          <input ref={this.titleRef} type="text" />
        </div>
        <div>
          <label>Author</label>
          <input ref={this.authorRef} type="text" />
        </div>
        <div>
          <button onClick={this.onSave}>Save</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h4>Post Form</h4>
        {this.renderForm()}
      </div>
    );
  }
}

export default PostForm;