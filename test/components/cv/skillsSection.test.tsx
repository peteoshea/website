import React from 'react';
import CvSkillsSection from 'components/cv/skillsSection';
import Skill from 'types/skill';
import { render } from '../../testUtils';

describe('CvSkillsSection', () => {
  const skills: Skill[] = [
    {
      description: 'Next.js'
    },
    {
      description: 'Javascript'
    }
  ];

  test('contains heading', () => {
    const { getByText } = render(<CvSkillsSection skills={skills} />);
    const element = getByText(/Skills/i);
    expect(element).toBeDefined();
  });

  test('contains summary', () => {
    const { getByText } = render(<CvSkillsSection skills={skills} />);
    const element = getByText(/Next.js/i);
    expect(element).toBeDefined();
  });

  test('contains email', () => {
    const { getByText } = render(<CvSkillsSection skills={skills} />);
    const element = getByText(/Javascript/i);
    expect(element).toBeDefined();
  });
});
