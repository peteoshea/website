import React from 'react';
import CvPortfolioSection from 'components/cv/portfolioSection';
import Project from 'types/project';
import { render } from '../../testUtils';

describe('CvPortfolioSection', () => {
  const firstProject: Project = {
    name: 'Example Project',
    url: 'https://example.com/first'
  };
  const projectWithDescription: Project = {
    name: 'Project With Description',
    url: 'https://example.com/withDescription',
    description: 'Description detailing what this project is all about'
  };
  const projectWithImage: Project = {
    name: 'Project With Image',
    url: 'https://example.com/withDescription',
    image: '/test.png'
  };
  const projects: Project[] = [firstProject, projectWithDescription, projectWithImage];

  test('contains heading', () => {
    const { getByText } = render(<CvPortfolioSection projects={projects} />);
    const element = getByText(/Portfolio/i);
    expect(element).toBeDefined();
  });

  test('contains first project name', () => {
    const { getByText } = render(<CvPortfolioSection projects={projects} />);
    const element = getByText(firstProject.name);
    expect(element).toBeDefined();
  });

  test('contains link to first project url', () => {
    const { container } = render(<CvPortfolioSection projects={projects} />);
    const links = container.querySelectorAll('a');
    const element = Array.from(links).find(
      (element) => element.getAttribute('href') === firstProject.url
    );
    expect(element).toBeDefined();
  });

  test('contains project with description name', () => {
    const { getByText } = render(<CvPortfolioSection projects={projects} />);
    const element = getByText(projectWithDescription.name);
    expect(element).toBeDefined();
  });

  test('contains link to project with description url', () => {
    const { container } = render(<CvPortfolioSection projects={projects} />);
    const links = container.querySelectorAll('a');
    const element = Array.from(links).find(
      (element) => element.getAttribute('href') === projectWithDescription.url
    );
    expect(element).toBeDefined();
  });

  test('contains description from link to project with description', () => {
    const { getByText } = render(<CvPortfolioSection projects={projects} />);
    const element = getByText(projectWithDescription.description);
    expect(element).toBeDefined();
  });

  test('contains image for project with image', () => {
    const { container } = render(<CvPortfolioSection projects={projects} />);
    const images = container.querySelectorAll('img');
    const element = Array.from(images).find(
      (element) => element.getAttribute('src') === projectWithImage.image
    );
    expect(element).toBeDefined();
  });
});
