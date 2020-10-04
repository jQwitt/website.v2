import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { PageLink } from '../index';

afterEach(cleanup);
describe('PageLink', () => {
  test('snapshot', () => {
    const { asFragment } = render(<PageLink />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders props correctly', () => {
    const { getByText } = render(<PageLink nameToLink={'test'} />);
    expect(getByText('test')).toBeTruthy();
  });

  it('calls scrollToName', () => {
    const scrollToName = jest.fn();
    const { container, getByText } = render(<PageLink nameToLink={'test'} />);
    fireEvent.click(container.firstChild);
    expect(scrollToName).toHaveBeenCalled;
  });
});
