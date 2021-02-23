import React from 'react';
import CvPortfolioSection from '../../../source/components/cv/portfolioSection';
import Project from '../../../source/types/project';
import { render } from '../../testUtils';

describe('CvPortfolioSection', () => {
  const projects: Project[] = [
    {
      name: 'This Website',
      url: 'https://github.com/peteoshea/website/'
    },
    {
      name: 'Next.js Template Project',
      url: 'https://github.com/peteoshea/nextjs-template/'
    }
  ];

  test('contains heading', () => {
    const { getByText } = render(<CvPortfolioSection projects={projects} />);
    const element = getByText(/Portfolio/i);
    expect(element).toBeDefined();
  });

  test('contains first project', () => {
    const { getByText } = render(<CvPortfolioSection projects={projects} />);
    const element = getByText(/This Website/i);
    expect(element).toBeDefined();
  });

  test('contains second project', () => {
    const { getByText } = render(<CvPortfolioSection projects={projects} />);
    const element = getByText(/Next.js Template Project/i);
    expect(element).toBeDefined();
  });
});
