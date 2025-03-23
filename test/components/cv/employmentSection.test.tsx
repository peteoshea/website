import React from 'react';
import { describe, expect, test } from 'vitest';
import { render } from '../../testUtils';

import CvEmploymentSection from '../../../source/components/cv/employmentSection';
import Job from '../../../source/types/job';

describe('CvEmploymentSection', () => {
  const jobs: Job[] = [
    {
      startDate: '2013',
      endDate: 'Present',
      title: 'Lead Developer',
      employer: 'Polaris Elements',
      location: 'Taunton',
      description: 'Quickly promoted, managing a team of 5 developers.'
    },
    {
      startDate: '2000',
      endDate: '2010',
      title: 'Consultant',
      employer: 'FBH Associates',
      location: 'Taunton'
    }
  ];

  test('contains heading', () => {
    const { getByText } = render(<CvEmploymentSection jobs={jobs} />);
    const element = getByText(/Employment History/i);
    expect(element).toBeDefined();
  });

  test('contains first job title', () => {
    const { getByText } = render(<CvEmploymentSection jobs={jobs} />);
    const element = getByText(/Lead Developer/i);
    expect(element).toBeDefined();
  });

  test('contains second job title', () => {
    const { getByText } = render(<CvEmploymentSection jobs={jobs} />);
    const element = getByText(/Consultant/i);
    expect(element).toBeDefined();
  });
});
