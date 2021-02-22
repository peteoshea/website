import React from 'react';
import { CvEmploymentEntry } from '../../../source/components/cv/employmentEntry';
import Job from '../../../source/types/job';
import { render } from '../../testUtils';

describe('CvEmploymentEntry', () => {
  const job: Job = {
    startDate: '2013',
    endDate: 'Present',
    title: 'Lead Developer',
    employer: 'Polaris Elements',
    location: 'Taunton',
    description: 'Quickly promoted to Lead Developer, managing a team of 5 developers.'
  };

  it('contains date range', () => {
    const { getByText } = render(<CvEmploymentEntry job={job} />);
    const element = getByText(/2013-Present/i);
    expect(element).toBeDefined();
  });
});
