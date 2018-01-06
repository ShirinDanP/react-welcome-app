import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Welcome';

it('Footer without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});
