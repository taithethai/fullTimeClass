import { FETCH_DATA, NEW_BLOG } from '../actions';

// const base = [{title: "post zero", date:"2017-05-01", content:"This isn't from the server."}]

export default (state = [], action) => {
  switch(action.type) {
    case (FETCH_DATA):
      return action.payload.data;
    case (NEW_BLOG):
      return action.payload.data;
    default:
      return state;
  }
}