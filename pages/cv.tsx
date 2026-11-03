import Layout from 'components/common/layout';

import CvPortfolioSection from 'components/cv/portfolioSection';
import CvProfileSection from 'components/cv/profileSection';
import CvSkillsSection from 'components/cv/skillsSection';
import CvTimeline from 'components/cv/timeline';

import myCv from 'content/cv/myCv';
import { jobToTimelineEntry, qualificationToTimelineEntry } from 'content/cv/timelineEntries';

export const CV = (): React.JSX.Element => (
  <Layout pageTitle="CV" heading="Pete O'Shea" subheading="Curriculum Vitae / Résumé">
    <CvProfileSection profile={myCv.profile} />
    <CvSkillsSection skills={myCv.skills} />
    <CvPortfolioSection projects={myCv.portfolio} />
    <CvTimeline title="Employment History" entries={myCv.employment.map(jobToTimelineEntry)} />
    <CvTimeline title="Education" entries={myCv.education.map(qualificationToTimelineEntry)} />
  </Layout>
);

export default CV;
