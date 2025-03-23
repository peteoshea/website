import React from 'react';
import { render } from '../../testUtils';

import CvEducationSection from '@/source/components/cv/educationSection';
import Qualification from '@/source/types/qualification';

describe('CvEducationSection', () => {
  const qualifications: Qualification[] = [
    {
      startDate: '1992',
      endDate: '1996',
      name: 'Mathematics & Computing BSc (Hons)',
      school: 'University of Bath',
      location: 'Bath'
    },
    {
      startDate: '1990',
      endDate: '1992',
      name: '4 A-Levels',
      school: 'Taunton School',
      location: 'Taunton',
      description: 'Maths (A), Further Maths (C), Physics (C), Business Studies (C)'
    }
  ];

  test('contains heading', () => {
    const { getByText } = render(<CvEducationSection qualifications={qualifications} />);
    const element = getByText(/Education/i);
    expect(element).toBeDefined();
  });

  test('contains first education', () => {
    const { getByText } = render(<CvEducationSection qualifications={qualifications} />);
    const element = getByText(/University of Bath/i);
    expect(element).toBeDefined();
  });

  test('contains second education', () => {
    const { getByText } = render(<CvEducationSection qualifications={qualifications} />);
    const element = getByText(/Taunton School/i);
    expect(element).toBeDefined();
  });
});
