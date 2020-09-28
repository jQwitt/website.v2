import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { EducationItem } from '../index';

afterEach(cleanup);
describe('EducationItem renders correctly', () => {
  test('snapshot', () => {
    const { asFragment } = render(<EducationItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('conditionally renders title', () => {
    const data = {
      title: 'Title',
    };
    const { getByText } = render(<EducationItem title={data.title} />);
    expect(getByText(data.title)).toBeTruthy();
  });
  it('conditionally renders subTitle', () => {
    const data = {
      subTitle: 'subTitle',
    };
    const { getByText } = render(<EducationItem subTitle={data.subTitle} />);
    expect(getByText(data.subTitle)).toBeTruthy();
  });
  it('conditionally renders description', () => {
    const data = {
      description: 'description',
    };
    const { getByText } = render(
      <EducationItem description={data.description} />
    );
    expect(getByText(data.description)).toBeTruthy();
  });

  it('renders all props correctly', () => {
    const data = {
      title: 'Title',
      subTitle: 'subTitle',
      description: 'description',
    };
    const { getByText } = render(
      <EducationItem
        title={data.title}
        subTitle={data.subTitle}
        description={data.description}
      />
    );
    expect(getByText(data.title)).toBeTruthy();
    expect(getByText(data.subTitle)).toBeTruthy();
    expect(getByText(data.description)).toBeTruthy();
  });
});
