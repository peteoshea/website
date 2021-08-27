import React from 'react';
import CvEducationSection from 'components/cv/educationSection';
import Education from 'types/education';
import { render } from '../../testUtils';

describe('CvEducationSection', () => {
  const educations: Education[] = [
    {
      startDate: '1992',
      endDate: '1996',
      qualification: 'Mathematics & Computing BSc (Hons)',
      school: 'University of Bath',
      location: 'Bath'
    },
    {
      startDate: '1990',
      endDate: '1992',
      qualification: '4 A-Levels',
      school: 'Taunton School',
      location: 'Taunton',
      description: 'Maths (A), Further Maths (C), Physics (C), Business Studies (C)'
    }
  ];

  test('contains heading', () => {
    const { getByText } = render(<CvEducationSection educations={educations} />);
    const element = getByText(/Education/i);
    expect(element).toBeDefined();
  });

  test('contains first education', () => {
    const { getByText } = render(<CvEducationSection educations={educations} />);
    const element = getByText(/University of Bath/i);
    expect(element).toBeDefined();
  });

  test('contains second education', () => {
    const { getByText } = render(<CvEducationSection educations={educations} />);
    const element = getByText(/Taunton School/i);
    expect(element).toBeDefined();
  });
});
