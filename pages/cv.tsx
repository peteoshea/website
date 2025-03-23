import React from 'react';

import CvEducationSection from '@/source/components/cv/educationSection';
import CvEmploymentSection from '@/source/components/cv/employmentSection';
import CvPortfolioSection from '@/source/components/cv/portfolioSection';
import CvProfileSection from '@/source/components/cv/profileSection';
import CvSkillsSection from '@/source/components/cv/skillsSection';
import Layout from '@/source/components/common/layout';
import myCv from '@/source/content/cv/myCv';

export const CV = (): React.JSX.Element => (
  <Layout pageTitle="CV" heading="Pete O'Shea" subheading="Curriculum Vitae / Résumé">
    <CvProfileSection profile={myCv.profile} />
    <CvSkillsSection skills={myCv.skills} />
    <CvPortfolioSection projects={myCv.portfolio} />
    <CvEmploymentSection jobs={myCv.employment} />
    <CvEducationSection qualifications={myCv.education} />
  </Layout>
);

export default CV;
