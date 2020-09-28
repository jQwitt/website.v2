import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { HeaderIcon } from '../index';

afterEach(cleanup);
describe('HeaderIcon renders correctly', () => {
  test('snapshot', () => {
    const { asFragment } = render(<HeaderIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('conditionally renders icon at any size', () => {
    const data = {
      icon: 'subTract',
      size: ['xsmall', 'small', 'medium', 'large', 'xlarge', 'jumbo'],
    };
    data.size.forEach((cl) => {
      const { container } = render(<HeaderIcon icon={data.icon} size={cl} />);
      expect(container.querySelector('i').classList.contains(cl)).toBe(true);
    });
  });

  it('conditionally renders underline', () => {
    const data = {
      underline: true,
    };
    const { container } = render(<HeaderIcon underline={data.underline} />);
    expect(container.firstChild.classList.contains('underlined')).toBe(true);
  });
});
