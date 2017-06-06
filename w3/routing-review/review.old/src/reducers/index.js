import { combineReducers } from 'redux';
import CardsReducer from './Cards';

export default (state = [], action) => {
  switch(action.type) {
    default:
      return state;
  }
}

