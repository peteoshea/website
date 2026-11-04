import React from 'react';
import About, { getStaticProps } from '../../pages/about';
import { render } from '../testUtils';

const systemsSection = { slug: 'systems', name: 'Systems', description: 'S', image: '/s.svg' };

vi.mock('content/posts/posts', () => ({
  getVisibleSections: () => [systemsSection]
}));

describe('About page', () => {
  test('contains heading About', () => {
    const { getByRole } = render(<About />);
    const element = getByRole('heading', { level: 1, name: 'About' });
    expect(element).toBeDefined();
  });

  test('contains each section heading', () => {
    const { getByRole } = render(<About />);
    expect(getByRole('heading', { level: 2, name: 'Who am I?' })).toBeDefined();
    expect(getByRole('heading', { level: 2, name: 'What interests me?' })).toBeDefined();
    expect(
      getByRole('heading', { level: 2, name: 'What am I currently working on?' })
    ).toBeDefined();
  });
  test('each paragraph is its own element', () => {
    const { getByText } = render(<About />);
    const first = getByText(/My name is Pete O'Shea/);
    const second = getByText(/After my travels I returned home/);
    expect(first.tagName).toBe('P');
    expect(second.tagName).toBe('P');
    expect(first).not.toBe(second);
  });

  test('contains the last paragraph of the page', () => {
    const { getByText } = render(<About />);
    expect(getByText(/focused on exploring the latest AI technologies/)).toBeDefined();
  });

  test('navbar About link points at the current page', () => {
    const { container } = render(<About />);
    const link = Array.from(container.querySelectorAll('nav a')).find(
      (a) => a.textContent === 'About'
    );
    expect(link.getAttribute('href')).toBe('#');
  });
});

describe('About page sections', () => {
  test('static props carry the visible sections', async () => {
    expect(await getStaticProps({})).toEqual({ props: { sections: [systemsSection] } });
  });

  test('navbar links to the sections given', () => {
    const { getByText } = render(<About sections={[systemsSection]} />);
    expect(getByText('Systems').getAttribute('href')).toBe('/systems');
  });
});
