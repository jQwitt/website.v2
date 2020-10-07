import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from '../card.component';

afterEach(cleanup);
describe('Card renders correctly', () => {
  test('snapshot', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('conditionally renders title', () => {
    const data = {
      title: 'Title',
    };
    const { getByText } = render(<Card title={data.title} />);
    expect(getByText(data.title)).toBeTruthy();
  });
  it('conditionally renders subTitle', () => {
    const data = {
      subTitle: 'description',
    };
    const { getByText } = render(<Card title={data.subTitle} />);
    expect(getByText(data.subTitle)).toBeTruthy();
  });
  test('renders all props correctly', () => {
    const data = {
      title: 'Title',
      subTitle: 'description',
    };
    const { getByText } = render(
      <Card title={data.title} subTitle={data.subTitle} />,
    );
    expect(getByText(data.title)).toBeTruthy();
    expect(getByText(data.subTitle)).toBeTruthy();
  });
});
