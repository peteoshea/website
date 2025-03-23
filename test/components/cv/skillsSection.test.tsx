import React from 'react';
import { describe, expect, test } from 'vitest';
import { render } from '../../testUtils';

import CvSkillsSection from '../../../source/components/cv/skillsSection';
import Skill from '../../../source/types/skill';

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

  test('contains first skill', () => {
    const { getByText } = render(<CvSkillsSection skills={skills} />);
    const element = getByText(/Next.js/i);
    expect(element).toBeDefined();
  });

  test('contains second skill', () => {
    const { getByText } = render(<CvSkillsSection skills={skills} />);
    const element = getByText(/Javascript/i);
    expect(element).toBeDefined();
  });
});
