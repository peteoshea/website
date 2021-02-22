import Job from '../types/job';
import CvEmploymentEntry from './cv/employmentEntry';
import CvSection from './cvSection';

type Props = {
  jobs: Job[];
};

export const CvEmploymentSection = ({ jobs }: Props): JSX.Element => (
  <CvSection title="Employment History">
    {jobs.map((job, index) => (
      <CvEmploymentEntry job={job} key={index} />
    ))}
    <table className="w-full">
      {jobs.map((job, index) => (
        <>
          <tr key={index}>
            <td className="pt-4 w-1/6 tracking-tighter text-center">
              {job.startDate}-{job.endDate}
            </td>
            <td className="pt-4 w-2/6 text-lg font-bold">{job.title}</td>
            <td className="pt-4 w-2/6 font-semibold">{job.employer}</td>
            <td className="pt-4 w-1/6 text-xs text-right">{job.location}</td>
          </tr>
          {job.description ? (
            <tr key={index + '-desc'}>
              <td></td>
              <td colSpan={3} className="text-sm">
                {job.description}
              </td>
            </tr>
          ) : null}
        </>
      ))}
    </table>
  </CvSection>
);

export default CvEmploymentSection;
