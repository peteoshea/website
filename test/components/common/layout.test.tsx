import React from 'react';
import Layout from 'components/common/layout';
import { render } from '../../testUtils';

describe('Page layout', () => {
  const subheading = 'subheading for page';
  const pageTitle = 'Page Title';

  test('contains nav tag', () => {
    const { container } = render(<Layout pageTitle={pageTitle} />);
    const element = container.querySelector('nav');
    expect(element).not.toBeNull();
  });

  test('navbar links to the sections given', () => {
    const sections = [{ slug: 'systems', name: 'Systems', description: 'S', image: '/s.svg' }];
    const { getByText } = render(<Layout pageTitle={pageTitle} sections={sections} />);
    expect(getByText('Systems').getAttribute('href')).toBe('/systems');
  });

  test('navbar highlights the current section while linking to it', () => {
    const sections = [{ slug: 'systems', name: 'Systems', description: 'S', image: '/s.svg' }];
    const { getByText } = render(
      <Layout pageTitle="A post" sections={sections} currentSection="Systems" />
    );
    const link = getByText('Systems');
    expect(link.getAttribute('href')).toBe('/systems');
    expect(link.getAttribute('aria-current')).toBe('true');
  });

  test('contains footer tag', () => {
    const { container } = render(<Layout pageTitle={pageTitle} />);
    const element = container.querySelector('footer');
    expect(element).not.toBeNull();
  });

  test('contains main tag', () => {
    const { container } = render(<Layout pageTitle={pageTitle} />);
    const element = container.querySelector('main');
    expect(element).not.toBeNull();
  });

  test('main tag contains children', () => {
    const { container } = render(
      <Layout pageTitle={pageTitle}>
        <p>Child Text</p>
      </Layout>
    );
    const element = container.querySelector('main');
    expect(element.innerHTML).toBe('<p>Child Text</p>');
  });

  test('contains header tag', () => {
    const { container } = render(<Layout pageTitle={pageTitle} />);
    const element = container.querySelector('header');
    expect(element).not.toBeNull();
  });

  test('header contains h1 tag', () => {
    const { container } = render(<Layout pageTitle={pageTitle} />);
    const header = container.querySelector('header');
    const element = header.querySelector('h1');
    expect(element).not.toBeNull();
  });

  test('header h1 tag contains title by default', () => {
    const { container } = render(<Layout pageTitle={pageTitle} />);
    const element = container.querySelector('header').querySelector('h1');
    expect(element.innerHTML).toBe(pageTitle);
  });

  test('header h1 tag contains heading when set', () => {
    const heading = 'Option Page Heading';
    const { container } = render(<Layout pageTitle={pageTitle} heading={heading} />);
    const element = container.querySelector('header').querySelector('h1');
    expect(element.innerHTML).toBe(heading);
  });

  test('header does not contain h2 tag by default', () => {
    const { container } = render(<Layout pageTitle={pageTitle} />);
    const header = container.querySelector('header');
    const element = header.querySelector('h2');
    expect(element).toBeNull();
  });

  test('header contains h2 tag when subheading set', () => {
    const { container } = render(<Layout pageTitle={pageTitle} subheading={subheading} />);
    const header = container.querySelector('header');
    const element = header.querySelector('h2');
    expect(element).not.toBeNull();
  });

  test('header h2 tag contains subheading when set', () => {
    const { container } = render(<Layout pageTitle={pageTitle} subheading={subheading} />);
    const element = container.querySelector('header').querySelector('h2');
    expect(element.innerHTML).toBe(subheading);
  });

  const navLink = (container: HTMLElement, label: string) =>
    Array.from(container.querySelectorAll('nav a')).find((a) => a.textContent === label);

  test('navbar marks the page named by pageTitle as current', () => {
    const { container } = render(<Layout pageTitle="CV" />);
    expect(navLink(container, 'CV').getAttribute('href')).toBe('#');
  });

  test('navbar marks currentPage as current when it differs from pageTitle', () => {
    const { container } = render(<Layout pageTitle="Curriculum Vitae" currentPage="CV" />);
    expect(navLink(container, 'CV').getAttribute('href')).toBe('#');
  });
});
