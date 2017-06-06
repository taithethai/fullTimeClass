import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';

class Blog extends Component {
  componentDidMount() {
    this.props.fetchData();
    console.log('ComponentDidMount');
  }
  render() {
    return (
      <div className="App">
        {this.props.blog.map((key, i) => {
          return (
            <div key={i}>
              <h2>{key.title}</h2>
              <h3>{key.date}</h3>
              <p>{key.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blog: state.blogPosts,
  };
}
// export default connect(mapStateToProps)(Blog); 
export default connect(mapStateToProps, { fetchData })(Blog); 