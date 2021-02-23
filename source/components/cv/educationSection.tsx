import Education from '../../types/education';
import CvSection from './section';
import CvEducationEntry from './educationEntry';

type Props = {
  educations: Education[];
};

export const CvEducationSection = ({ educations }: Props): JSX.Element => (
  <CvSection title="Education">
    {educations.map((education, index) => (
      <CvEducationEntry education={education} key={index} />
    ))}
  </CvSection>
);

export default CvEducationSection;
