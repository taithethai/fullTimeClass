import axios from 'axios';

export const GET_DATA = 'GET_DATA' 

export default getData = () => {
  const promise = axios.get('http://localhost:5000/get');
  return {
    type: GET_DATA,
    payload: promise,
  }
}