import React from 'react';

import CvSection from '@/source/components/cv/section';
import CvQualification from '@/source/components/cv/qualification';
import Qualification from '@/source/types/qualification';

type Props = {
  qualifications: Qualification[];
};

export const CvEducationSection = ({ qualifications }: Props): React.JSX.Element => (
  <CvSection title="Education">
    {qualifications.map((qualification, index) => (
      <CvQualification qualification={qualification} key={index} />
    ))}
  </CvSection>
);

export default CvEducationSection;
