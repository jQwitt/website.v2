import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Footer } from '../index';

afterEach(cleanup);
describe('Footer renders correctly', () => {
  test('snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
