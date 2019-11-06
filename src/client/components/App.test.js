import React from 'react';
import App from './App';
import Header from './Header';
import TestRenderer from 'react-test-renderer';

jest.mock('./Header', () => 'Header');

it('renders correctly', () => {
  const children = (<div>test</div>);
  const app = TestRenderer
    .create(<App children={children}/>)
    .toJSON();
  expect(app).toMatchSnapshot();
});
