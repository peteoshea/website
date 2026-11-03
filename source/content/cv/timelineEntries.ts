import Job from 'types/job';
import Qualification from 'types/qualification';
import TimelineEntry from 'types/timelineEntry';

export const jobToTimelineEntry = (job: Job): TimelineEntry => ({
  startDate: job.startDate,
  endDate: job.endDate,
  title: job.title,
  organisation: job.employer,
  location: job.location,
  description: job.description
});

export const qualificationToTimelineEntry = (qualification: Qualification): TimelineEntry => ({
  startDate: qualification.startDate,
  endDate: qualification.endDate,
  title: qualification.name,
  organisation: qualification.school,
  location: qualification.location,
  description: qualification.description,
  url: qualification.url
});
