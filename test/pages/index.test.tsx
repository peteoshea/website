import React from 'react';
import { render } from '../testUtils';
import { Home, getStaticProps } from '../../pages/index';

vi.mock('next/head', () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>
}));

const systemsSection = { slug: 'systems', name: 'Systems', description: 'S', image: '/s.svg' };

vi.mock('content/posts/posts', () => ({
  getVisibleSections: () => [systemsSection]
}));

describe('Home page', () => {
  test('contains heading', () => {
    const { getByText } = render(<Home />);
    const element = getByText(/Welcome to the website/i);
    expect(element).toBeDefined();
  });

  test('contains link to cv', () => {
    const { getByText } = render(<Home />);
    const element = getByText(/CV/i);
    expect(element).toBeDefined();
  });

  test('contains license', () => {
    const { getByText } = render(<Home />);
    const element = getByText(/Creative Commons Attribution 4.0 International License/i);
    expect(element).toBeDefined();
  });

  test('hero image is not lazy-loaded because it is the LCP element', () => {
    const { container } = render(<Home />);
    const element = container.querySelector('img[src*="writing-tools"]');
    expect(element.getAttribute('loading')).not.toBe('lazy');
  });

  test('title names the Home page', () => {
    render(<Home />);
    expect(document.querySelector('title').textContent).toBe("Home | Pete O'Shea");
  });
});

describe('Home page sections', () => {
  test('static props carry the visible sections', async () => {
    expect(await getStaticProps({})).toEqual({ props: { sections: [systemsSection] } });
  });

  test('navbar links to the sections given', () => {
    const { getByText } = render(<Home sections={[systemsSection]} />);
    expect(getByText('Systems').getAttribute('href')).toBe('/systems');
  });
});
