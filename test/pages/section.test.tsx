import React from 'react';
import SectionPage, { getStaticPaths, getStaticProps } from '../../pages/[section]/index';
import { PostSummary } from 'types/post';
import { Section } from 'types/section';
import { render, within } from '../testUtils';

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
const posts: PostSummary[] = [
  { slug: 'second', title: 'Second post', date: '2026-03-02', summary: 'The newer one.' },
  { slug: 'first', title: 'First post', date: '2026-01-15', summary: 'The older one.' }
];

vi.mock('content/posts/posts', () => ({
  getVisibleSections: () => [ramblings, systems],
  getPosts: (section: string) => (section === 'ramblings' ? posts : [])
}));

const renderPage = () =>
  render(<SectionPage section={ramblings} posts={posts} sections={[ramblings, systems]} />);

describe('Section page', () => {
  test('heading is the section name', () => {
    const { getByRole } = renderPage();
    expect(getByRole('heading', { level: 1, name: 'Ramblings' })).toBeDefined();
  });

  test('shows the section header image', () => {
    const { getByAltText } = renderPage();
    expect(getByAltText('Ramblings').getAttribute('src')).toContain(
      '/images/section-ramblings.svg'
    );
  });

  test('shows the section description', () => {
    const { getByText } = renderPage();
    expect(getByText('Thoughts and opinions.')).toBeDefined();
  });

  test('lists each post as a link to its page, in the order given', () => {
    const { getAllByRole } = renderPage();
    const links = getAllByRole('link', { name: /post$/ });
    expect(links.map((link) => [link.textContent, link.getAttribute('href')])).toEqual([
      ['Second post', '/ramblings/second'],
      ['First post', '/ramblings/first']
    ]);
  });

  test('shows each post date and summary', () => {
    const { getAllByRole } = renderPage();
    const [newest] = getAllByRole('listitem');
    expect(within(newest).getByText('2 March 2026')).toBeDefined();
    expect(within(newest).getByText('The newer one.')).toBeDefined();
  });

  test('shows only the title for a post with no date or summary', () => {
    const { getByRole } = render(
      <SectionPage
        section={ramblings}
        posts={[{ slug: 'bare', title: 'Bare post' }]}
        sections={[ramblings]}
      />
    );
    expect(getByRole('listitem').textContent).toBe('Bare post');
  });

  test('navbar links to the visible sections and marks this one current', () => {
    const { getByText } = renderPage();
    expect(getByText('Systems').getAttribute('href')).toBe('/systems');
    expect(getByText('Ramblings', { selector: 'nav a' }).getAttribute('href')).toBe('#');
  });
});

describe('Section page static generation', () => {
  test('only generates paths for visible sections, so others are not found', async () => {
    const result = await getStaticPaths({});
    expect(result).toEqual({
      paths: [{ params: { section: 'ramblings' } }, { params: { section: 'systems' } }],
      fallback: false
    });
  });

  test('props carry the section, its posts and the visible sections', async () => {
    const result = await getStaticProps({ params: { section: 'ramblings' } });
    expect(result).toEqual({
      props: { section: ramblings, posts, sections: [ramblings, systems] }
    });
  });
});
