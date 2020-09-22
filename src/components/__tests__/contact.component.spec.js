import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Contact } from '../index';

afterEach(cleanup);
describe('Contact renders correctly', () => {
  test('snapshot', () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});
