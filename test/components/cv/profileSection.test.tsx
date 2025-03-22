import React from 'react';
import CvProfileSection from 'components/cv/profileSection';
import Profile from 'types/profile';
import { render } from '../../testUtils';

describe('CvProfileSection', () => {
  const email = 'mail@peteoshea.co.uk';
  const githubName = 'github-name';
  const githubUrl = 'https://peteoshea.co.uk/github';
  const linkedInName = "Pete O'Shea";
  const linkedInUrl = 'https://www.linkedin.com/in/pete-o-shea-9a072126/';
  const summary = 'Highly motivated software developer with over 20 years of experience.';
  const twitter = 'twitter-name';

  const minimalProfile: Profile = {
    summary: summary
  };

  test('contains profile heading', () => {
    const { getByText } = render(<CvProfileSection profile={minimalProfile} />);
    const element = getByText(/Profile/i);
    expect(element).toBeDefined();
  });

  test('contains summary', () => {
    const { getByText } = render(<CvProfileSection profile={minimalProfile} />);
    const element = getByText(summary);
    expect(element).toBeDefined();
  });

  test('does not contain email icon for minimal profile', () => {
    const { container } = render(<CvProfileSection profile={minimalProfile} />);
    const images = container.querySelectorAll('img');
    const element = Array.from(images).find(
      (element) => element.getAttribute('alt') === 'Email icon'
    );
    expect(element).not.toBeDefined();
  });

  test('contains email icon when email specified', () => {
    const profile: Profile = {
      ...minimalProfile,
      email
    };
    const { container } = render(<CvProfileSection profile={profile} />);
    const images = container.querySelectorAll('img');
    const element = Array.from(images).find(
      (element) => element.getAttribute('alt') === 'Email icon'
    );
    expect(element).toBeDefined();
  });

  test('contains email when specified', () => {
    const profile: Profile = {
      ...minimalProfile,
      email
    };
    const { getByText } = render(<CvProfileSection profile={profile} />);
    const element = getByText(email);
    expect(element).toBeDefined();
  });

  test('contains mailto link for email when specified', () => {
    const profile: Profile = {
      ...minimalProfile,
      email
    };
    const { container } = render(<CvProfileSection profile={profile} />);
    const links = container.querySelectorAll('a');
    const element = Array.from(links).find(
      (element) => element.getAttribute('href') === 'mailto:' + email
    );
    expect(element).toBeDefined();
  });

  test('does not contain github logo for minimal profile', () => {
    const { container } = render(<CvProfileSection profile={minimalProfile} />);
    const images = container.querySelectorAll('img');
    const element = Array.from(images).find(
      (element) => element.getAttribute('alt') === 'GitHub logo'
    );
    expect(element).not.toBeDefined();
  });

  test('contains github logo when github name specified', () => {
    const profile: Profile = {
      ...minimalProfile,
      githubName
    };
    const { container } = render(<CvProfileSection profile={profile} />);
    const images = container.querySelectorAll('img');
    const element = Array.from(images).find(
      (element) => element.getAttribute('alt') === 'GitHub logo'
    );
    expect(element).toBeDefined();
  });

  test('contains github name when specified', () => {
    const profile: Profile = {
      ...minimalProfile,
      githubName
    };
    const { getByText } = render(<CvProfileSection profile={profile} />);
    const element = getByText(githubName);
    expect(element).toBeDefined();
  });

  test('contains link to github profile when just github name is specified', () => {
    const profile: Profile = {
      ...minimalProfile,
      githubName
    };
    const { container } = render(<CvProfileSection profile={profile} />);
    const links = container.querySelectorAll('a');
    const element = Array.from(links).find(
      (element) => element.getAttribute('href') === 'https://github.com/' + githubName
    );
    expect(element).toBeDefined();
  });

  test('contains link to github profile when specified', () => {
    const profile: Profile = {
      ...minimalProfile,
      githubName, // Needs the name for the github section to appear
      githubUrl
    };
    const { container } = render(<CvProfileSection profile={profile} />);
    const links = container.querySelectorAll('a');
    const element = Array.from(links).find((element) => element.getAttribute('href') === githubUrl);
    expect(element).toBeDefined();
  });

  test('does not contain twitter logo for minimal profile', () => {
    const { container } = render(<CvProfileSection profile={minimalProfile} />);
    const images = container.querySelectorAll('img');
    const element = Array.from(images).find(
      (element) => element.getAttribute('alt') === 'Twitter logo'
    );
    expect(element).not.toBeDefined();
  });

  test('contains twitter logo when twitter specified', () => {
    const profile: Profile = {
      ...minimalProfile,
      twitter
    };
    const { container } = render(<CvProfileSection profile={profile} />);
    const images = container.querySelectorAll('img');
    const element = Array.from(images).find(
      (element) => element.getAttribute('alt') === 'Twitter logo'
    );
    expect(element).toBeDefined();
  });

  test('contains twitter handle when specified', () => {
    const profile: Profile = {
      ...minimalProfile,
      twitter
    };
    const { getByText } = render(<CvProfileSection profile={profile} />);
    const element = getByText('@' + twitter);
    expect(element).toBeDefined();
  });

  test('contains link to twitter profile when specified', () => {
    const profile: Profile = {
      ...minimalProfile,
      twitter
    };
    const { container } = render(<CvProfileSection profile={profile} />);
    const links = container.querySelectorAll('a');
    const element = Array.from(links).find(
      (element) => element.getAttribute('href') === 'https://twitter.com/' + twitter
    );
    expect(element).toBeDefined();
  });

  test('does not contain linked in logo for minimal profile', () => {
    const { container } = render(<CvProfileSection profile={minimalProfile} />);
    const images = container.querySelectorAll('img');
    const element = Array.from(images).find(
      (element) => element.getAttribute('alt') === 'LinkedIn logo'
    );
    expect(element).not.toBeDefined();
  });

  test('does not contain linked in logo when just linked in name is specified', () => {
    const profile: Profile = {
      ...minimalProfile,
      linkedInName
    };
    const { container } = render(<CvProfileSection profile={profile} />);
    const images = container.querySelectorAll('img');
    const element = Array.from(images).find(
      (element) => element.getAttribute('alt') === 'LinkedIn logo'
    );
    expect(element).not.toBeDefined();
  });

  test('does not contain linked in logo when just linked in url is specified', () => {
    const profile: Profile = {
      ...minimalProfile,
      linkedInUrl
    };
    const { container } = render(<CvProfileSection profile={profile} />);
    const images = container.querySelectorAll('img');
    const element = Array.from(images).find(
      (element) => element.getAttribute('alt') === 'LinkedIn logo'
    );
    expect(element).not.toBeDefined();
  });

  test('contains linked in logo when both linked in name and url are specified', () => {
    const profile: Profile = {
      ...minimalProfile,
      linkedInName,
      linkedInUrl
    };
    const { container } = render(<CvProfileSection profile={profile} />);
    const images = container.querySelectorAll('img');
    const element = Array.from(images).find(
      (element) => element.getAttribute('alt') === 'LinkedIn logo'
    );
    expect(element).toBeDefined();
  });

  test('contains linked in name when both linked in name and url are specified', () => {
    const profile: Profile = {
      ...minimalProfile,
      linkedInName,
      linkedInUrl
    };
    const { getByText } = render(<CvProfileSection profile={profile} />);
    const element = getByText(linkedInName);
    expect(element).toBeDefined();
  });

  test('contains link to linked in profile when both linked in name and url are specified', () => {
    const profile: Profile = {
      ...minimalProfile,
      linkedInName,
      linkedInUrl
    };
    const { container } = render(<CvProfileSection profile={profile} />);
    const links = container.querySelectorAll('a');
    const element = Array.from(links).find(
      (element) => element.getAttribute('href') === linkedInUrl
    );
    expect(element).toBeDefined();
  });
});
