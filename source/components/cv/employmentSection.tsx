import Job from '../../types/job';
import CvEmploymentEntry from './employmentEntry';
import CvSection from './section';

type Props = {
  jobs: Job[];
};

export const CvEmploymentSection = ({ jobs }: Props): JSX.Element => (
  <CvSection title="Employment History">
    {jobs.map((job, index) => (
      <CvEmploymentEntry job={job} key={index} />
    ))}
  </CvSection>
);

export default CvEmploymentSection;
