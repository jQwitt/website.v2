import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Jumbotron from '../jumbotron.component';
import scrollToName from '../../scripts/scrollToName';

jest.mock('../../scripts/scrollToName', () => jest.fn());

afterEach(cleanup);
describe('Jumbotron renders correctly', () => {
  test('snapshot', () => {
    const { asFragment } = render(<Jumbotron />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls scrollToName', () => {
    const { container } = render(<Jumbotron />);
    fireEvent.click(container.firstChild.lastChild);
    expect(scrollToName).toHaveBeenCalled();
  });
});
