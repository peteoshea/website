import Job from 'types/job';
import Profile from 'types/profile';
import Project from 'types/project';
import Qualification from 'types/qualification';
import Skills from 'types/skills';

type CvContent = {
  profile: Profile;
  skills: Skills;
  portfolio: Project[];
  employment: Job[];
  education: Qualification[];
};

export default CvContent;
