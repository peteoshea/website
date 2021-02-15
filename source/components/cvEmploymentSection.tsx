import Job from '../types/job';
import CvSection from './cvSection';

type Props = {
  jobs: Job[];
};

export const CvEmploymentSection = ({ jobs }: Props): JSX.Element => (
  <CvSection title="Employment History">
    <table className="w-full">
      {jobs.map((job) => (
        <>
          <tr key={job.title}>
            <td className="pt-4 w-1/6 tracking-tighter text-center">
              {job.startDate}-{job.endDate}
            </td>
            <td className="pt-4 w-2/6 text-lg font-bold">{job.title}</td>
            <td className="pt-4 w-2/6 font-semibold">{job.employer}</td>
            <td className="pt-4 w-1/6 text-xs text-right">{job.location}</td>
          </tr>
          {job.description ? (
            <tr>
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
