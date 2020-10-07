import React from 'react';
import { cleanup, render } from '@testing-library/react';
import scrollToName from '../scrollToName';

beforeEach(() => {
  global.scrollTo = jest.fn();
});
afterEach(cleanup);
describe('scrollToName', () => {
  it('scrolls the window', () => {
    const raw = <div name="test" />;
    render(raw);
    scrollToName(document, global, 'test');
    expect(global.scrollTo).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: 0,
    });
  });
});
