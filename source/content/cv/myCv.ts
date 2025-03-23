import CvContent from '@/source/types/cvContent';

import myEducation from '@/source/content/cv/myEducation';
import myEmployment from '@/source/content/cv/myEmployment';
import myPortfolio from '@/source/content/cv/myPortfolio';
import myProfile from '@/source/content/cv/myProfile';
import mySkills from '@/source/content/cv/mySkills';

const myCV: CvContent = {
  profile: myProfile,
  skills: mySkills,
  portfolio: myPortfolio,
  employment: myEmployment,
  education: myEducation
};

export default myCV;
