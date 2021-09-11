import Job from 'types/job';
import CvJob from 'components/cv/job';
import CvSection from 'components/cv/section';

type Props = {
  jobs: Job[];
};

export const CvEmploymentSection = ({ jobs }: Props): JSX.Element => (
  <CvSection title="Employment History">
    {jobs.map((job, index) => (
      <CvJob job={job} key={index} />
    ))}
  </CvSection>
);

export default CvEmploymentSection;
