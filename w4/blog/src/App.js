import React, { Component } from 'react';
import logo from './logo.svg';
import NewBlogPost from './NewBlogPost';
import { addBlogPost, fetchData } from './actions';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(key) {
    key.id = this.props.blogs.length;
    this.props.addBlogPost(key).then(this.props.fetchData);
    console.log(key);
  }
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <NewBlogPost onSubmit={this.submit}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogPosts,
  };
};

export default connect(mapStateToProps, { fetchData, addBlogPost })(App);
