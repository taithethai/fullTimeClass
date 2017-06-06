import React, { Component } from 'react';
import { connect } from 'react-redux';
import Messages from './components/Messages';
import Input from './components/Input';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <Messages />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  }
}

export default  connect(mapStateToProps)(App);
