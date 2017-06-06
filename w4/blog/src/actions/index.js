import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const NEW_BLOG = 'NEW_BLOG';

export const fetchData = () => {
  const promise = axios.get('http://localhost:5000/items');
  return {
    type: FETCH_DATA,
    payload: promise,
  }
}

export const addBlogPost = (item) => {
  const promise = axios.post('http://localhost:5000/new-item', item);
  return {
    type: NEW_BLOG,
    payload: promise,
  }
}