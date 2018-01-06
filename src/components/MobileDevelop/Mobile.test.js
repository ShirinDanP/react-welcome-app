import React from 'react';
import ReactDOM from 'react-dom';
import Mobile from './Header';

it('Mobile without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Mobile />, div);
});
