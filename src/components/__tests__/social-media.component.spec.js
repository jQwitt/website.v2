import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SocialMedia from '../social-media.component';

afterEach(cleanup);
describe('SocialMedia renders correctly', () => {
  test('snapshot', () => {
    const { asFragment } = render(<SocialMedia />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('conditionally justifies content', () => {
    const data = {
      justifyContent: ['start', 'center', 'end'],
    };
    data.justifyContent.forEach((cl) => {
      const { container } = render(<SocialMedia justifyContent={cl} />);
      expect(
        container.firstChild.classList.contains(`justify-content-${cl}`),
      ).toBe(true);
    });
  });

  it('conditionally sizes icons', () => {
    const data = {
      size: ['xsmall', 'small', 'medium', 'large', 'xlarge', 'jumbo'],
    };
    data.size.forEach((cl) => {
      const { container } = render(<SocialMedia size={cl} />);
      expect(container.querySelector('i').classList.contains(cl)).toBe(true);
    });
  });
});
