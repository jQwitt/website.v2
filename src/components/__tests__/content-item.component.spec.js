import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ContentItem from '../content-item.component';

afterEach(cleanup);
describe('ContentItem renders correctly', () => {
  test('snapshot', () => {
    const { asFragment } = render(<ContentItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('conditionally renders title', () => {
    const data = {
      title: 'Title',
    };
    const { getByText } = render(<ContentItem title={data.title} />);
    expect(getByText(data.title)).toBeTruthy();
  });
  it('conditionally renders subTitle', () => {
    const data = {
      subTitle: 'subTitle',
    };
    const { getByText } = render(<ContentItem subTitle={data.subTitle} />);
    expect(getByText(data.subTitle)).toBeTruthy();
  });
  it('conditionally renders description', () => {
    const data = {
      description: 'description',
    };
    const { getByText } = render(
      <ContentItem description={data.description} />,
    );
    expect(getByText(data.description)).toBeTruthy();
  });
  it('conditionally renders dateRange', () => {
    const data = {
      dateRange: 'dateRange',
    };
    const { getByText } = render(<ContentItem dateRange={data.dateRange} />);
    expect(getByText(data.dateRange)).toBeTruthy();
  });
  it('conditionally renders misc', () => {
    const data = {
      misc: 'misc',
    };
    const { getByText } = render(<ContentItem misc={data.misc} />);
    expect(getByText(data.misc)).toBeTruthy();
  });

  it('renders all props correctly', () => {
    const data = {
      title: 'Title',
      subTitle: 'subTitle',
      description: 'description',
      dateRange: 'dateRange',
      misc: 'misc',
    };
    const { getByText } = render(
      <ContentItem
        title={data.title}
        subTitle={data.subTitle}
        description={data.description}
        dateRange={data.dateRange}
        misc={data.misc}
      />,
    );
    expect(getByText(data.title)).toBeTruthy();
    expect(getByText(data.subTitle)).toBeTruthy();
    expect(getByText(data.description)).toBeTruthy();
    expect(getByText(data.dateRange)).toBeTruthy();
    expect(getByText(data.misc)).toBeTruthy();
  });
});
