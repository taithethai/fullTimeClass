import { combineReducers } from 'redux';
import FriendsReducer from './FriendsList'

const rootReducer = combineReducers({
  friends: FriendsReducer,
});

export default rootReducer;