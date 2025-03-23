import React from 'react';

import Job from '@/source/types/job';
import CvJob from '@/source/components/cv/job';
import CvSection from '@/source/components/cv/section';

type Props = {
  jobs: Job[];
};

export const CvEmploymentSection = ({ jobs }: Props): React.JSX.Element => (
  <CvSection title="Employment History">
    {jobs.map((job, index) => (
      <CvJob job={job} key={index} />
    ))}
  </CvSection>
);

export default CvEmploymentSection;
