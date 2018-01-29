import React from 'react';
import { create } from 'react-test-renderer';
import App from '../App';

it('it should work', () => {
  const tree = create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
