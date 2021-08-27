import Job from 'types/job';
import CvEmploymentEntry from 'components/cv/employmentEntry';
import CvSection from 'components/cv/section';

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
