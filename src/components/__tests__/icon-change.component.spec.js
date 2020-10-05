import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import IconChange from '../icon-change.component';

afterEach(cleanup);
describe('IconChange renders correctly', () => {
  test('snapshot', () => {
    const { asFragment } = render(<IconChange />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('conditionally renders className', () => {
    const data = {
      className: 'testClass',
    };
    const { container } = render(<IconChange className={data.className} />);
    expect(container.firstChild.classList.contains(data.className)).toBe(true);
  });
  it('toggles icon on click', () => {
    const data = {
      firstIcon: 'add',
      secondIcon: 'subTract',
    };
    const { container, getByTestId } = render(
      <IconChange firstIcon={data.firstIcon} secondIcon={data.secondIcon} />,
    );
    fireEvent.click(container.firstChild);
    expect(
      getByTestId('togglesIcon').classList.contains(
        `flaticon-${data.secondIcon}`,
      ),
    ).toBe(true);
    fireEvent.click(container.firstChild);
    expect(
      getByTestId('togglesIcon').classList.contains(
        `flaticon-${data.firstIcon}`,
      ),
    ).toBe(true);
  });
});
