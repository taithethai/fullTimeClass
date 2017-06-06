import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewBlogPost extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <Field name="date" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <Field name="content" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

NewBlogPost = reduxForm({form: 'NewBlogPost'})(NewBlogPost);

export default NewBlogPost;