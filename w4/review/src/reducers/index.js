import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import TripsReducer from './TripsReducer';

const rootReducer = combineReducers({
  trips: TripsReducer,
  form: FormReducer,
});

export default rootReducer;
