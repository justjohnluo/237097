import React from 'react';
import ReactDOM from 'react-dom';
import API from './utils/Api';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<h1>HUBS</h1>, div);
});

it('Mock API works fine', (done) => {
  API.getSponsors(() => done());
});
