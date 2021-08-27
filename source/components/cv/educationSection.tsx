import Education from 'types/education';
import CvSection from 'components/cv/section';
import CvEducationEntry from 'components/cv/educationEntry';

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
