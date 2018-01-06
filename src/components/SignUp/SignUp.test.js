import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './SignUp';

it('SignUp without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUp />, div);
});
