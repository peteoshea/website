import Job from '@/source/types/job';
import Profile from '@/source/types/profile';
import Project from '@/source/types/project';
import Qualification from '@/source/types/qualification';
import Skill from '@/source/types/skill';

type CvContent = {
  profile: Profile;
  skills: Skill[];
  portfolio: Project[];
  employment: Job[];
  education: Qualification[];
};

export default CvContent;
