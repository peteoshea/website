import React from 'react';
import CvSkillsSection from 'components/cv/skillsSection';
import Skills from 'types/skills';
import { render } from '../../testUtils';

describe('CvSkillsSection', () => {
  const skills: Skills = {
    bulletPoints: ['Next.js', 'Javascript']
  };

  test('contains heading', () => {
    const { getByText } = render(<CvSkillsSection skills={skills} />);
    const element = getByText(/Skills/i);
    expect(element).toBeDefined();
  });

  test('contains heading as specified', () => {
    const skillsWithTitle: Skills = {
      ...skills,
      title: 'Technical'
    };
    const { getByText } = render(<CvSkillsSection skills={skillsWithTitle} />);
    const element = getByText(/Technical/i);
    expect(element).toBeDefined();
  });

  test('contains first skill', () => {
    const { getByText } = render(<CvSkillsSection skills={skills} />);
    const element = getByText(/Next.js/i);
    expect(element).toBeDefined();
  });

  test('keeps the list wide on a phone, with the side padding only from sm', () => {
    const { container } = render(<CvSkillsSection skills={skills} />);
    const list = container.querySelector('ul').className;
    expect(list).toMatch(/(^|\s)pl-5(\s|$)/);
    expect(list).toMatch(/(^|\s)sm:px-16(\s|$)/);
    expect(list).not.toMatch(/(^|\s)px-16(\s|$)/);
  });

  test('contains second skill', () => {
    const { getByText } = render(<CvSkillsSection skills={skills} />);
    const element = getByText(/Javascript/i);
    expect(element).toBeDefined();
  });
});
