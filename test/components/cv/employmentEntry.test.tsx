import React from 'react';
import CvEmploymentEntry from 'components/cv/employmentEntry';
import Job from 'types/job';
import { render } from '../../testUtils';

describe('CvEmploymentEntry', () => {
  const job: Job = {
    startDate: '2013',
    endDate: 'Present',
    title: 'Lead Developer',
    employer: 'Polaris Elements',
    location: 'Taunton',
    description: 'Quickly promoted, managing a team of 5 developers.'
  };

  test('contains date range', () => {
    const { getByText } = render(<CvEmploymentEntry job={job} />);
    const element = getByText(/2013-Present/i);
    expect(element).toBeDefined();
  });

  test('contains job title', () => {
    const { getByText } = render(<CvEmploymentEntry job={job} />);
    const element = getByText(/Lead Developer/i);
    expect(element).toBeDefined();
  });

  test('contains employer', () => {
    const { getByText } = render(<CvEmploymentEntry job={job} />);
    const element = getByText(/Polaris Elements/i);
    expect(element).toBeDefined();
  });

  test('contains location', () => {
    const { getByText } = render(<CvEmploymentEntry job={job} />);
    const element = getByText(/Taunton/i);
    expect(element).toBeDefined();
  });

  test('contains description', () => {
    const { getByText } = render(<CvEmploymentEntry job={job} />);
    const element = getByText(/Quickly promoted/i);
    expect(element).toBeDefined();
  });
});
