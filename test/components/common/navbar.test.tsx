import React from 'react';
import Navbar from 'components/common/navbar';
import { Section } from 'types/section';
import { render } from '../../testUtils';

const visibleSections: Section[] = [
  { slug: 'ramblings', name: 'Ramblings', description: 'R', image: '/r.svg' },
  { slug: 'systems', name: 'Systems', description: 'S', image: '/s.svg' }
];

describe('Navbar', () => {
  test('contains nav tag', () => {
    const { container } = render(<Navbar />);
    const element = container.querySelector('nav');
    expect(element).not.toBeNull();
  });

  test('contains img', () => {
    const { container } = render(<Navbar />);
    const element = container.querySelector('img');
    expect(element).not.toBeNull();
  });

  test('contains img with logo', () => {
    const { container } = render(<Navbar />);
    const element = container.querySelector('img');
    expect(element.getAttribute('src')).toMatch(/^\/_next\/image\?url=%2Ffavicon-96x96\.png/);
  });

  test('logo image has alt text', () => {
    const { container } = render(<Navbar />);
    const element = container.querySelector('img');
    expect(element.getAttribute('alt')).toBeTruthy();
  });

  test('contains link to home', () => {
    const { container } = render(<Navbar />);
    const links = container.querySelectorAll('a');
    const element = Array.from(links).find((element) => element.getAttribute('href') === '/');
    expect(element).toBeDefined();
  });

  test('when currentPage is home does not contain link to home', () => {
    const { container } = render(<Navbar currentPage="Home" />);
    const links = container.querySelectorAll('a');
    const element = Array.from(links).find((element) => element.getAttribute('href') === '/');
    expect(element).not.toBeDefined();
  });

  test('contains cv', () => {
    const { getByText } = render(<Navbar />);
    const element = getByText(/CV/i);
    expect(element).toBeDefined();
  });

  test('contains cv link', () => {
    const { getByText } = render(<Navbar />);
    const element = getByText(/CV/i);
    expect(element.getAttribute('href')).toBe('/cv');
  });

  test('when currentPage is cv links to #', () => {
    const { getByText } = render(<Navbar currentPage="CV" />);
    const element = getByText(/CV/i);
    expect(element.getAttribute('href')).toBe('#');
  });

  test('contains a link for each section given', () => {
    const { getByText } = render(<Navbar sections={visibleSections} />);
    expect(getByText('Ramblings').getAttribute('href')).toBe('/ramblings');
    expect(getByText('Systems').getAttribute('href')).toBe('/systems');
  });

  test('contains no section links when no sections are given', () => {
    const { container } = render(<Navbar />);
    const labels = Array.from(container.querySelectorAll('nav a')).map((a) => a.textContent);
    expect(labels).toEqual(['', 'CV', 'About']);
  });

  test('when currentPage is a section its link goes to #', () => {
    const { getByText } = render(<Navbar sections={visibleSections} currentPage="Systems" />);
    expect(getByText('Systems').getAttribute('href')).toBe('#');
  });

  test('contains about link to /about', () => {
    const { getByText } = render(<Navbar />);
    const element = getByText(/About/);
    expect(element.getAttribute('href')).toBe('/about');
  });

  test('section links come before cv and about links', () => {
    const { container } = render(<Navbar sections={visibleSections} />);
    const labels = Array.from(container.querySelectorAll('nav a')).map((a) => a.textContent);
    expect(labels).toEqual(['', 'Ramblings', 'Systems', 'CV', 'About']);
  });

  test('when currentPage is about links to #', () => {
    const { getByText } = render(<Navbar currentPage="About" />);
    const element = getByText(/About/);
    expect(element.getAttribute('href')).toBe('#');
  });

  test('highlights the link for the current page and only that link', () => {
    const { getByText } = render(<Navbar currentPage="CV" />);
    const cv = getByText('CV');
    const about = getByText('About');
    expect(cv.getAttribute('aria-current')).toBe('page');
    expect(cv.className).toContain('text-red-900');
    expect(about.getAttribute('aria-current')).toBeNull();
    expect(about.className).not.toContain('text-red-900');
  });

  test('when currentSection is given its link goes to the section and is highlighted', () => {
    const { getByText } = render(
      <Navbar sections={visibleSections} currentPage="A post" currentSection="Systems" />
    );
    const systems = getByText('Systems');
    expect(systems.getAttribute('href')).toBe('/systems');
    expect(systems.getAttribute('aria-current')).toBe('true');
    expect(systems.className).toContain('text-red-900');
    expect(getByText('Ramblings').className).not.toContain('text-red-900');
  });

  test('logo is 64px at every width, so the 96px file is barely stretched', () => {
    const { container } = render(<Navbar />);
    expect(container.querySelector('img').className).toBe('size-16');
  });

  test('fits a phone screen: tighter link spacing below the sm breakpoint', () => {
    const { getByText } = render(<Navbar sections={visibleSections} />);
    const linkBox = getByText('Ramblings').parentElement.className;
    expect(linkBox).toMatch(/(^|\s)px-2(\s|$)/);
    expect(linkBox).toMatch(/(^|\s)sm:px-4(\s|$)/);
  });

  test('the highlighted link darkens further on hover', () => {
    const { getByText } = render(<Navbar currentPage="CV" />);
    expect(getByText('CV').className).toContain('hover:text-red-950');
  });
});
