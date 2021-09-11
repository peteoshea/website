import Job from 'types/job';
import Profile from 'types/profile';
import Project from 'types/project';
import Qualification from 'types/qualification';
import Skill from 'types/skill';

type CvContent = {
  profile: Profile;
  skills: Skill[];
  portfolio: Project[];
  employment: Job[];
  education: Qualification[];
};

export default CvContent;
