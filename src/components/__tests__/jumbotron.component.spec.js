import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Jumbotron } from '../index';
import { scrollToName } from '../../scripts';

afterEach(cleanup);
describe('Jumbotron renders correctly', () => {
  test('snapshot', () => {
    const { asFragment } = render(<Jumbotron />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls scrollToName', () => {
    const scrollToName = jest.fn();
    const { container, getByText } = render(<Jumbotron />);
    fireEvent.click(container.firstChild.lastChild);
    expect(scrollToName).toHaveBeenCalled;
  });
});
