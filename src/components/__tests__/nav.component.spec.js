import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Navigation } from '../index';

afterEach(cleanup);
describe('Navigation renders correctly', () => {
  test('snapshot', () => {
    const { asFragment } = render(<Navigation />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correct items', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('website.v2')).toBeTruthy();
    expect(getByText('experience')).toBeTruthy();
    expect(getByText('projects')).toBeTruthy();
    expect(getByText('education')).toBeTruthy();
    expect(getByText('contact')).toBeTruthy();
  });
});
