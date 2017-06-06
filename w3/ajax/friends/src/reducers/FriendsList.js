import { FETCH_DATA, NEW_FRIEND } from '../actions';

export default (state = [], action) => {
  switch(action.type) {
    case (FETCH_DATA):
      return action.payload.data;
    case (NEW_FRIEND):
      return action.payload.data;
    default:
      return state;
  }
};