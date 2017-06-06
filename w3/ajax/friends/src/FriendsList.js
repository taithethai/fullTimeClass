import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, addFriend } from './actions';
import { bindActionCreators } from 'redux';

class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriendName: '',
      newFriendAge: '',
      newFriendEmail: '',
    };
    this.updateNewFriendName = this.updateNewFriendName.bind(this);
    this.updateNewFriendAge = this.updateNewFriendAge.bind(this);
    this.updateNewFriendEmail = this.updateNewFriendEmail.bind(this);
  }
  updateNewFriendName(event) {
    this.setState({newFriendName: event.target.value});
  }
  updateNewFriendAge(event) {
    this.setState({newFriendAge: event.target.value});
  }
  updateNewFriendEmail(event) {
    this.setState({newFriendEmail: event.target.value});
  }  
  render() {
    return(
      <div>
      <button onClick={this.props.getFriends}>Get Friends</button>
      <div>
        <input onChange={this.updateNewFriendName} value={this.state.newFriendName} />
        <input onChange={this.updateNewFriendAge} value={this.state.newFriendAge} />
        <input onChange={this.updateNewFriendEmail} value={this.state.newFriendEmail} />
        <button onClick={() => this.props.addFriend(this.state.newFriendName, this.state.newFriendAge, this.state.newFriendEmail)}>Add Friend</button>
      </div>
        <ul>
          {this.props.friends.map((friend, i) => <li key={i}>Name: {friend.name} Age: {friend.age} Email: {friend.email}</li>)}
        </ul>
      </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({getFriends: fetchData, addFriend: addFriend}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);