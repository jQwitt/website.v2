import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Navigation from '../nav.component';

global.scrollTo = jest.fn();
afterEach(cleanup);
describe('Navigation renders correctly', () => {
  test('snapshot', () => {
    const { asFragment } = render(<Navigation />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('toggles the nav bar', () => {
    const { getByTestId } = render(<Navigation />);
    fireEvent.click(getByTestId('togglesIcon'));
    expect(
      getByTestId('containerPageLinks').classList.contains('hidden-mobile'),
    ).toBeFalsy();
    expect(
      getByTestId('containerSocialLinks').classList.contains('hidden-mobile'),
    ).toBeFalsy();
    fireEvent.click(getByTestId('togglesIcon'));
    expect(
      getByTestId('containerPageLinks').classList.contains('hidden-mobile'),
    ).toBeTruthy();
    expect(
      getByTestId('containerSocialLinks').classList.contains('hidden-mobile'),
    ).toBeTruthy();
  });

  it('renders correct items', () => {
    const { getByText } = render(<Navigation />);
    const links = ['experience', 'projects', 'education', 'contact'];
    expect(getByText('website.v2')).toBeTruthy();
    links.forEach((l) => {
      expect(getByText(l)).toBeTruthy();
    });
  });
});
