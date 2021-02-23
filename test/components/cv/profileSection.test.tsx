import React from 'react';
import CvProfileSection from '../../../source/components/cv/profileSection';
import Profile from '../../../source/types/profile';
import { render } from '../../testUtils';

describe('CvProfileSection', () => {
  const profile: Profile = {
    summary: 'Highly motivated software developer with over 20 years of experience.',
    email: 'mail@peteoshea.co.uk',
    githubName: 'github-name',
    githubUrl: 'https://github.com/peteoshea',
    twitter: 'twitter-name',
    linkedInName: "Pete O'Shea",
    linkedInUrl: 'https://www.linkedin.com/in/pete-o-shea-9a072126/'
  };

  test('contains heading', () => {
    const { getByText } = render(<CvProfileSection profile={profile} />);
    const element = getByText(/Profile/i);
    expect(element).toBeDefined();
  });

  test('contains summary', () => {
    const { getByText } = render(<CvProfileSection profile={profile} />);
    const element = getByText(/Highly motivated/i);
    expect(element).toBeDefined();
  });

  test('contains email', () => {
    const { getByText } = render(<CvProfileSection profile={profile} />);
    const element = getByText(/mail@peteoshea.co.uk/i);
    expect(element).toBeDefined();
  });
});
