import React from 'react';
import scrollToName from '../scrollToName';
import { cleanup, render } from '@testing-library/react';

beforeEach(() => {
  global.scrollTo = jest.fn();
});
afterEach(cleanup);
describe('scrollToName', () => {
  it('calls scrollTo', () => {
    scrollToName(document, global, "test");
    expect(global.scrollTo).toHaveBeenCalled;
  });
  it('scrolls the window', () => {
    const raw = <div name="test"></div>;
    const { container } = render(raw);
    scrollToName(document, global, "test");
    expect(global.scrollTo).toHaveBeenCalledWith({"behavior": "smooth", "top": 0});
  })
});
