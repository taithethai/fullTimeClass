import React, { Component } from 'react';
import { connect } from 'react-redux';

class Messages extends Component {
  render() {
    return (
    <ul>
      {this.props.messages.map((message, i) => {
      return (
        <li key={i}>
          {message.text}
        </li>)
      })}
    </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  }
}

export default  connect(mapStateToProps)(Messages);
