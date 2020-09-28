import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Navigation } from '../index';

afterEach(cleanup);
describe('Navigation renders correctly', () => {
  test('snapshot', () => {
    const { asFragment } = render(<Navigation />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('toggles the nav bar', () => {
    const { container, getByTestId } = render(<Navigation />);
    fireEvent.click(getByTestId('togglesIcon'));
    expect(
      getByTestId('containerPageLinks').classList.contains('hidden-mobile')
    ).toBeFalsy();
    expect(
      getByTestId('containerSocialLinks').classList.contains('hidden-mobile')
    ).toBeFalsy();
    fireEvent.click(getByTestId('togglesIcon'));
    expect(
      getByTestId('containerPageLinks').classList.contains('hidden-mobile')
    ).toBeTruthy();
    expect(
      getByTestId('containerSocialLinks').classList.contains('hidden-mobile')
    ).toBeTruthy();
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
