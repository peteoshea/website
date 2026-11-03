import { jobToTimelineEntry, qualificationToTimelineEntry } from 'content/cv/timelineEntries';
import Job from 'types/job';
import Qualification from 'types/qualification';

describe('timelineEntries', () => {
  test('maps a job employer to the organisation', () => {
    const job: Job = {
      startDate: '2013',
      endDate: '2021',
      title: 'Lead Developer',
      employer: 'Polaris Elements',
      location: 'Taunton',
      description: 'Managed a team.'
    };
    expect(jobToTimelineEntry(job)).toEqual({
      startDate: '2013',
      endDate: '2021',
      title: 'Lead Developer',
      organisation: 'Polaris Elements',
      location: 'Taunton',
      description: 'Managed a team.'
    });
  });

  test('maps a qualification name and school to the title and organisation', () => {
    const qualification: Qualification = {
      startDate: '1990',
      endDate: '1992',
      name: '4 A-Levels',
      school: 'Taunton School',
      location: 'Somerset',
      description: 'Maths (A)',
      url: 'https://example.com/'
    };
    expect(qualificationToTimelineEntry(qualification)).toEqual({
      startDate: '1990',
      endDate: '1992',
      title: '4 A-Levels',
      organisation: 'Taunton School',
      location: 'Somerset',
      description: 'Maths (A)',
      url: 'https://example.com/'
    });
  });
});
