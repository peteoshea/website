import React from 'react';

import CvEducationSection from 'components/cv/educationSection';
import CvEmploymentSection from 'components/cv/employmentSection';
import CvPortfolioSection from 'components/cv/portfolioSection';
import CvProfileSection from 'components/cv/profileSection';
import CvSkillsSection from 'components/cv/skillsSection';
import Layout from 'components/common/layout';
import myCv from 'content/cv/myCv';

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
