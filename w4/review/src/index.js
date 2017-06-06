import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Trips from './Trips';
import LogTrip from './LogTrip';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import ReactPromise from 'react-promise';
import reducers from './reducers';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReactPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route path="/log-trip" component={LogTrip} />
        <Route path="/trips" component={Trips} />
        <Route exact path="/" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
