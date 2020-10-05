import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import PageLink from '../page-link.component';
import scrollToName from '../../scripts/scrollToName';

jest.mock('../../scripts/scrollToName', () => jest.fn());

afterEach(cleanup);
describe('PageLink', () => {
  test('snapshot', () => {
    const { asFragment } = render(<PageLink />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders props correctly', () => {
    const { getByText } = render(<PageLink nameToLink="test" />);
    expect(getByText('test')).toBeTruthy();
  });

  it('calls scrollToName', () => {
    const { getByText } = render(<PageLink nameToLink="test" />);
    fireEvent.click(getByText('test'));
    expect(scrollToName).toHaveBeenCalled();
  });
});
