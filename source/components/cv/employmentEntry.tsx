import Job from '../../types/job';

type Props = {
  job: Job;
};

export const CvEmploymentEntry = ({ job }: Props): JSX.Element => (
  <div className="grid grid-cols-3 md:grid-cols-12 md:gap-x-2 pt-4">
    <div className="col-start-3 md:col-start-1 md:col-span-2 tracking-tighter text-right md:text-center my-auto">
      {job.startDate}-{job.endDate}
    </div>
    <div className="row-start-1 md:row-start-auto col-span-2 md:col-span-5 text-lg font-bold my-auto">
      {job.title}
    </div>
    <div className="col-span-2 md:col-span-4 font-semibold md:text-center my-auto">
      {job.employer}
    </div>
    <div className="text-xs text-right my-auto">{job.location}</div>
    {job.description ? (
      <div className="col-span-3 md:col-start-3 md:col-span-10 text-sm">{job.description}</div>
    ) : null}
  </div>
);

export default CvEmploymentEntry;
