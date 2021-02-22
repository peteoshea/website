import Job from '../../types/job';

type Props = {
  job: Job;
};

export const CvEmploymentEntry = ({ job }: Props): JSX.Element => (
  <div className="tracking-tighter text-center my-auto">
    {job.startDate}-{job.endDate}
  </div>
);

export default CvEmploymentEntry;
