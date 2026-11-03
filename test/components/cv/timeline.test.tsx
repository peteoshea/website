import React from 'react';
import CvTimeline from 'components/cv/timeline';
import TimelineEntry from 'types/timelineEntry';
import { render } from '../../testUtils';

describe('CvTimeline', () => {
  const entry: TimelineEntry = {
    startDate: '2013',
    endDate: '2021',
    title: 'Lead Developer',
    organisation: 'Polaris Elements',
    location: 'Taunton'
  };

  test('contains heading', () => {
    const { getByText } = render(<CvTimeline title="Employment History" entries={[entry]} />);
    expect(getByText('Employment History')).toBeDefined();
  });

  test('contains entry title, organisation and location', () => {
    const { getByText } = render(<CvTimeline title="Employment History" entries={[entry]} />);
    expect(getByText('Lead Developer')).toBeDefined();
    expect(getByText('Polaris Elements')).toBeDefined();
    expect(getByText('Taunton')).toBeDefined();
  });

  test('contains every entry', () => {
    const second: TimelineEntry = { ...entry, title: 'Consultant', organisation: 'FBH Associates' };
    const { getByText } = render(
      <CvTimeline title="Employment History" entries={[entry, second]} />
    );
    expect(getByText('Lead Developer')).toBeDefined();
    expect(getByText('Consultant')).toBeDefined();
  });

  describe('description', () => {
    const renderWith = (description?: string): string =>
      render(<CvTimeline title="T" entries={[{ ...entry, description }]} />).container.innerHTML;

    test('shows the description', () => {
      expect(renderWith('Managed a team of 5 developers.')).toContain(
        'Managed a team of 5 developers.'
      );
    });

    test('converts markdown in the description', () => {
      expect(renderWith('Managed a team of **5** developers.')).toContain(
        '<p>Managed a team of <strong>5</strong> developers.</p>'
      );
    });

    test('shows no description block when not set', () => {
      expect(renderWith(undefined)).not.toContain('<p>');
    });
  });

  describe('url', () => {
    test('links the title to the url when set', () => {
      const { getByText } = render(
        <CvTimeline title="T" entries={[{ ...entry, url: 'https://example.com/' }]} />
      );
      expect(getByText('Lead Developer').closest('a')?.getAttribute('href')).toBe(
        'https://example.com/'
      );
    });

    test('does not link the title when url not set', () => {
      const { getByText } = render(<CvTimeline title="T" entries={[entry]} />);
      expect(getByText('Lead Developer').closest('a')).toBeNull();
    });
  });

  describe('date range', () => {
    const renderDates = (dates: Pick<TimelineEntry, 'startDate' | 'endDate'>): string =>
      render(<CvTimeline title="T" entries={[{ ...entry, ...dates }]} />).container.innerHTML;

    test('shows start and end date as a range', () => {
      expect(renderDates({ startDate: '2013', endDate: '2021' })).toContain('2013–2021');
    });

    test('shows Present when end date not set', () => {
      expect(renderDates({ startDate: '2013', endDate: undefined })).toContain('2013–Present');
    });

    test('shows a single date when start and end date are the same', () => {
      const html = renderDates({ startDate: '2013', endDate: '2013' });
      expect(html).toContain('2013');
      expect(html).not.toContain('2013–2013');
    });
  });
});
