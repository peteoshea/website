import React from 'react';

import Skill from 'types/skill';
import CvSection from 'components/cv/section';

type Props = {
  skills: Skill[];
};

export const CvSkillsSection = ({ skills }: Props): React.JSX.Element => (
  <CvSection title="Skills">
    <ul className="list-disc px-16">
      {skills.map((skill, index) => (
        <li key={index}>{skill.description}</li>
      ))}
    </ul>
  </CvSection>
);

export default CvSkillsSection;
