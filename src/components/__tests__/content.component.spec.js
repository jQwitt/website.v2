import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Content from '../content.component';

afterEach(cleanup);

describe('Content renders correctly', () => {
  test('snapshot', () => {
    const { asFragment } = render(<Content />);
    expect(asFragment()).toMatchSnapshot();
  });
});
