import React from 'react';
import PostPage, { getStaticPaths, getStaticProps } from '../../pages/[section]/[slug]';
import { Post, PostSummary } from 'types/post';
import { Section } from 'types/section';
import { render } from '../testUtils';

const ramblings: Section = {
  slug: 'ramblings',
  name: 'Ramblings',
  description: 'Thoughts and opinions.',
  image: '/images/section-ramblings.svg'
};
const systems: Section = {
  slug: 'systems',
  name: 'Systems',
  description: 'How I build things.',
  image: '/images/section-systems.svg'
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

  test('shows no date for a post without one', () => {
    const undated: Post = { slug: 'undated', title: 'Undated', content: 'Body.' };
    const { container } = render(
      <PostPage section={ramblings} post={undated} sections={[ramblings]} />
    );
    expect(container.querySelector('main').textContent).toBe('Body.← Back to Ramblings');
  });

  test('shows the Post image above the title as a decorative 4:3 picture', () => {
    const pictured: Post = { ...post, image: '/photos/hello.jpg' };
    const { container, getByRole } = render(
      <PostPage section={ramblings} post={pictured} sections={[ramblings]} />
    );
    const image = container.querySelector(`img[src*="${encodeURIComponent('/photos/hello.jpg')}"]`);
    expect(image.getAttribute('alt')).toBe('');
    expect(Number(image.getAttribute('width')) / Number(image.getAttribute('height'))).toBe(4 / 3);
    const order = image.compareDocumentPosition(getByRole('heading', { level: 1 }));
    expect(order & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  test('keeps the body and back link to a readable, centred column', () => {
    const { container, getByRole } = renderPage();
    const column = container.querySelector('article').parentElement;
    expect(column.className).toMatch(/\bmax-w-prose\b/);
    expect(column.className).toMatch(/\bmx-auto\b/);
    expect(column.contains(getByRole('link', { name: '← Back to Ramblings' }))).toBe(true);
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

  test('navbar links back to its section and highlights it', () => {
    const { getByText } = renderPage();
    const link = getByText('Ramblings', { selector: 'nav a' });
    expect(link.getAttribute('href')).toBe('/ramblings');
    expect(link.getAttribute('aria-current')).toBe('true');
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
