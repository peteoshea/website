import React from 'react';
import CvEducationEntry from '../../../source/components/cv/educationEntry';
import Education from '../../../source/types/education';
import { render } from '../../testUtils';

describe('CvEducationEntry', () => {
  const education: Education = {
    startDate: '1990',
    endDate: '1992',
    qualification: '4 A-Levels',
    school: 'Taunton School',
    location: 'Somerset',
    description: 'Maths (A), Further Maths (C), Physics (C), Business Studies (C)'
  };

  test('contains date range', () => {
    const { getByText } = render(<CvEducationEntry education={education} />);
    const element = getByText(/1990-1992/i);
    expect(element).toBeDefined();
  });

  test('contains qualification', () => {
    const { getByText } = render(<CvEducationEntry education={education} />);
    const element = getByText(/4 A-Levels/i);
    expect(element).toBeDefined();
  });

  test('contains school', () => {
    const { getByText } = render(<CvEducationEntry education={education} />);
    const element = getByText(/Taunton School/i);
    expect(element).toBeDefined();
  });

  test('contains location', () => {
    const { getByText } = render(<CvEducationEntry education={education} />);
    const element = getByText(/Somerset/i);
    expect(element).toBeDefined();
  });

  test('contains description', () => {
    const { getByText } = render(<CvEducationEntry education={education} />);
    const element = getByText(/Maths/i);
    expect(element).toBeDefined();
  });
});
