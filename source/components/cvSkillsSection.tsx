import Skill from '../types/skill';
import CvSection from './cvSection';

type Props = {
  skills: Skill[];
};

export const CvSkillsSection = ({ skills }: Props): JSX.Element => (
  <CvSection title="Skills">
    <ul className="list-disc px-10">
      {skills.map((skill, index) => (
        <li key={index}>{skill.description}</li>
      ))}
    </ul>
  </CvSection>
);

export default CvSkillsSection;
