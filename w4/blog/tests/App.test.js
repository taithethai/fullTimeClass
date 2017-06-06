import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../src/App';
import NewBlogPost from '../src/NewBlogPost';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
