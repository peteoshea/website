import React from 'react';
import PostPage, { getStaticPaths, getStaticProps } from '../../pages/[section]/[slug]';
import { Post, PostSummary } from 'types/post';
import { Section } from 'types/section';
import { render } from '../testUtils';

const ramblings: Section = {
  slug: 'ramblings',
  name: 'Ramblings',
  description: 'Thoughts and opinions.',
  image: '/images/sections/ramblings.svg'
};
const systems: Section = {
  slug: 'systems',
  name: 'Systems',
  description: 'How I build things.',
  image: '/images/sections/systems.svg'
};
const post: Post = {
  slug: 'hello',
  title: 'Hello there',
  date: '2026-11-04',
  summary: 'A greeting.',
  content: 'Some **bold** words.'
};
const summaries: Record<string, PostSummary[]> = {
  ramblings: [{ slug: 'hello', title: 'Hello there', date: '2026-11-04', summary: 'A greeting.' }],
  systems: [{ slug: 'setup', title: 'My setup', date: '2026-10-01', summary: 'Tools.' }]
};

vi.mock('content/posts/posts', () => ({
  getVisibleSections: () => [ramblings, systems],
  getPosts: (section: string) => summaries[section] ?? [],
  getPost: (section: string, slug: string) =>
    section === 'ramblings' && slug === 'hello' ? post : undefined
}));

const renderPage = () =>
  render(<PostPage section={ramblings} post={post} sections={[ramblings, systems]} />);

describe('Post page', () => {
  test('heading is the post title', () => {
    const { getByRole } = renderPage();
    expect(getByRole('heading', { level: 1, name: 'Hello there' })).toBeDefined();
  });

  test('shows the post date in a friendly format', () => {
    const { getByText } = renderPage();
    expect(getByText('4 November 2026')).toBeDefined();
  });

  test('renders the markdown body', () => {
    const { container } = renderPage();
    expect(container.querySelector('main strong').textContent).toBe('bold');
  });

  test('links back to its section', () => {
    const { getByRole } = renderPage();
    const link = getByRole('link', { name: '← Back to Ramblings' });
    expect(link.getAttribute('href')).toBe('/ramblings');
  });

  test('navbar marks its section as current', () => {
    const { getByText } = renderPage();
    expect(getByText('Ramblings', { selector: 'nav a' }).getAttribute('href')).toBe('#');
  });
});

describe('Post page static generation', () => {
  test('generates a path for every post in every visible section', async () => {
    const result = await getStaticPaths({});
    expect(result).toEqual({
      paths: [
        { params: { section: 'ramblings', slug: 'hello' } },
        { params: { section: 'systems', slug: 'setup' } }
      ],
      fallback: false
    });
  });

  test('props carry the section, the post and the visible sections', async () => {
    const result = await getStaticProps({ params: { section: 'ramblings', slug: 'hello' } });
    expect(result).toEqual({
      props: { section: ramblings, post, sections: [ramblings, systems] }
    });
  });
});
