import React from 'react';
import CvJob from '@/source/components/cv/job';
import Job from '@/source/types/job';
import { render } from '../../testUtils';

describe('CvJob', () => {
  const startDate = '2013';
  const endDate = '2021';
  const title = 'Lead Developer';
  const employer = 'Polaris Elements';
  const location = 'Taunton';
  const description = 'Quickly promoted, managing a team of 5 developers.';
  const descriptionWithMarkdown = 'Quickly promoted, managing a team of **5** developers.';

  const job: Job = {
    startDate: startDate,
    endDate: endDate,
    title: title,
    employer: employer,
    location: location,
    description: description
  };
  const jobWithMarkdown: Job = {
    startDate: startDate,
    endDate: endDate,
    title: title,
    employer: employer,
    location: location,
    description: descriptionWithMarkdown
  };
  const jobWithoutDescription: Job = {
    startDate: startDate,
    endDate: endDate,
    title: title,
    employer: employer,
    location: location
  };
  const jobWithoutEndDate: Job = {
    startDate: startDate,
    title: title,
    employer: employer,
    location: location,
    description: description
  };
  const jobWithSameStartAndEndDate: Job = {
    startDate: startDate,
    endDate: startDate,
    title: title,
    employer: employer,
    location: location,
    description: description
  };

  test('contains start date', () => {
    const { container } = render(<CvJob job={job} />);
    expect(container.innerHTML).toContain(startDate);
  });

  test('contains end date', () => {
    const { container } = render(<CvJob job={job} />);
    expect(container.innerHTML).toContain(endDate);
  });

  test('contains start date when end date not set', () => {
    const { container } = render(<CvJob job={jobWithoutEndDate} />);
    expect(container.innerHTML).toContain(startDate);
  });

  test('contains end date of present when not set', () => {
    const { container } = render(<CvJob job={jobWithoutEndDate} />);
    expect(container.innerHTML).toContain('Present');
  });

  test('contains start date when end date same', () => {
    const { container } = render(<CvJob job={jobWithSameStartAndEndDate} />);
    expect(container.innerHTML).toContain(startDate);
  });

  test('contains date range', () => {
    const { container } = render(<CvJob job={job} />);
    expect(container.innerHTML).toContain(startDate + '-' + endDate);
  });

  test('does not contain date range when start and end date same', () => {
    const { container } = render(<CvJob job={jobWithSameStartAndEndDate} />);
    expect(container.innerHTML).not.toContain(startDate + '-' + startDate);
  });

  test('contains job title', () => {
    const { getByText } = render(<CvJob job={job} />);
    const element = getByText(title);
    expect(element).toBeDefined();
  });

  test('contains employer', () => {
    const { getByText } = render(<CvJob job={job} />);
    const element = getByText(employer);
    expect(element).toBeDefined();
  });

  test('contains location', () => {
    const { getByText } = render(<CvJob job={job} />);
    const element = getByText(location);
    expect(element).toBeDefined();
  });

  test('contains description', () => {
    const { container } = render(<CvJob job={job} />);
    expect(container.innerHTML).toContain(description);
  });

  test('does not contain description if not set', () => {
    const { container } = render(<CvJob job={jobWithoutDescription} />);
    expect(container.innerHTML).not.toContain(description);
  });

  test('converts markdown in description', () => {
    const { container } = render(<CvJob job={jobWithMarkdown} />);
    expect(container.innerHTML).toContain(
      '<p>Quickly promoted, managing a team of <strong>5</strong> developers.</p>'
    );
  });
});
