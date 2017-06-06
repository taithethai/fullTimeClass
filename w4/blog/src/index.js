import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Blog from './Blog';
// import NewBlogPost from './NewBlogPost';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/blog" component={Blog} />
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
        // <Route path="/new-post" component={NewBlogPost} />
