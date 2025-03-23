import React from 'react';
import { describe, expect, test } from 'vitest';
import { render } from '../../testUtils';

import CvQualification from '../../../source/components/cv/qualification';
import Qualification from '../../../source/types/qualification';

describe('CvEducationEntry', () => {
  const description = 'Maths (A), Further Maths (C), Physics (C), Business Studies (C)';
  const endDate = '1992';
  const location = 'Somerset'; // Don't use Taunton here to avoid potential clash with school
  const name = '4 A-Levels';
  const school = 'Taunton School';
  const startDate = '1990';
  const url = 'https://example.com/';

  const qualification: Qualification = {
    startDate: startDate,
    endDate: endDate,
    name: name,
    school: school,
    location: location,
    description: description
  };
  const qualificationWithoutEndDate: Qualification = {
    startDate: startDate,
    name: name,
    school: school,
    location: location,
    description: description
  };
  const qualificationWithSameStartAndEndDate: Qualification = {
    startDate: startDate,
    endDate: startDate,
    name: name,
    school: school,
    location: location,
    description: description
  };
  const qualificationWithUrl: Qualification = {
    startDate: startDate,
    endDate: endDate,
    name: name,
    school: school,
    location: location,
    description: description,
    url: url
  };

  test('contains start date', () => {
    const { container } = render(<CvQualification qualification={qualification} />);
    expect(container.innerHTML).toContain(startDate);
  });

  test('contains end date', () => {
    const { container } = render(<CvQualification qualification={qualification} />);
    expect(container.innerHTML).toContain(endDate);
  });

  test('contains start date when end date not set', () => {
    const { container } = render(<CvQualification qualification={qualificationWithoutEndDate} />);
    expect(container.innerHTML).toContain(startDate);
  });

  test('contains end date of present when not set', () => {
    const { container } = render(<CvQualification qualification={qualificationWithoutEndDate} />);
    expect(container.innerHTML).toContain('Present');
  });

  test('contains start date when end date same', () => {
    const { container } = render(
      <CvQualification qualification={qualificationWithSameStartAndEndDate} />
    );
    expect(container.innerHTML).toContain(startDate);
  });

  test('contains date range', () => {
    const { container } = render(<CvQualification qualification={qualification} />);
    expect(container.innerHTML).toContain(startDate + '-' + endDate);
  });

  test('does not contain date range when start and end date same', () => {
    const { container } = render(
      <CvQualification qualification={qualificationWithSameStartAndEndDate} />
    );
    expect(container.innerHTML).not.toContain(startDate + '-' + startDate);
  });

  test('contains qualification name', () => {
    const { getByText } = render(<CvQualification qualification={qualification} />);
    const element = getByText(name);
    expect(element).toBeDefined();
  });

  test('contains school', () => {
    const { getByText } = render(<CvQualification qualification={qualification} />);
    const element = getByText(school);
    expect(element).toBeDefined();
  });

  test('contains location', () => {
    const { getByText } = render(<CvQualification qualification={qualification} />);
    const element = getByText(location);
    expect(element).toBeDefined();
  });

  test('contains description', () => {
    const { getByText } = render(<CvQualification qualification={qualification} />);
    const element = getByText(description);
    expect(element).toBeDefined();
  });

  test('contains link to url if set', () => {
    const { container } = render(<CvQualification qualification={qualificationWithUrl} />);
    const links = container.querySelectorAll('a');
    const element = Array.from(links).find((element) => element.getAttribute('href') === url);
    expect(element).toBeDefined();
  });
});
