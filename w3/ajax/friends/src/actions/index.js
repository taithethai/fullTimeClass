import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const NEW_FRIEND = 'NEW_FRIEND'

export const fetchData = () => {
  const promise = axios.get('http://localhost:5000/friends');
  return {
    type: FETCH_DATA,
    payload: promise,
  }
}

export const addFriend = (name, age = undefined, email = undefined) => {
  const promise = axios.post('http://localhost:5000/new-friend', { name, age, email });
  return {
    type: NEW_FRIEND,
    payload: promise,1
  }
}
