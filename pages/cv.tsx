import 'tailwindcss/tailwind.css';
import Layout from 'components/common/layout';

import CvEducationSection from 'components/cv/educationSection';
import CvEmploymentSection from 'components/cv/employmentSection';
import CvPortfolioSection from 'components/cv/portfolioSection';
import CvProfileSection from 'components/cv/profileSection';
import CvSkillsSection from 'components/cv/skillsSection';

import myPortfolio from 'content/cv/myPortfolio';
import myEducation from 'content/cv/myEducation';
import myProfile from 'content/cv/myProfile';
import mySkills from 'content/cv/mySkills';
import myEmployment from 'content/cv/myEmployment';

export const CV = (): JSX.Element => (
  <Layout title="CV" heading="Pete O'Shea" subheading="Curriculum Vitae / Résumé">
    <CvProfileSection profile={myProfile} />
    <CvSkillsSection skills={mySkills} />
    <CvPortfolioSection projects={myPortfolio} />
    <CvEmploymentSection jobs={myEmployment} />
    <CvEducationSection qualifications={myEducation} />
  </Layout>
);

export default CV;
