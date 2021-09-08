import CvContent from 'types/cvContent';

import myEducation from 'content/cv/myEducation';
import myEmployment from 'content/cv/myEmployment';
import myPortfolio from 'content/cv/myPortfolio';
import myProfile from 'content/cv/myProfile';
import mySkills from 'content/cv/mySkills';

const myCV: CvContent = {
  profile: myProfile,
  skills: mySkills,
  portfolio: myPortfolio,
  employment: myEmployment,
  education: myEducation
};

export default myCV;
