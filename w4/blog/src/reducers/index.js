import { combineReducers } from 'redux';
import BlogReducer from './BlogReducer';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  blogPosts: BlogReducer,
  form: FormReducer,
});

export default rootReducer;