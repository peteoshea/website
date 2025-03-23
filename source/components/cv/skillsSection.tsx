import Skills from 'types/skills';
import CvSection from 'components/cv/section';

type Props = {
  skills: Skills;
};

export const CvSkillsSection = ({ skills }: Props): JSX.Element => {
  const title = skills.title ?? 'Skills';
  return (
    <CvSection title={title}>
      <ul className="list-disc px-16">
        {skills.bulletPoints.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </CvSection>
  );
};

export default CvSkillsSection;
