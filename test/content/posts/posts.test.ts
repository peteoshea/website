import path from 'node:path';
import { getPost, getPosts, getVisibleSections } from 'content/posts/posts';

const fixtureRoot = path.resolve(__dirname, '../../fixtures/content');

describe('getPosts', () => {
  test('returns the posts in a section, newest first', () => {
    const posts = getPosts('ramblings', fixtureRoot);
    expect(posts).toEqual([
      { slug: 'newer-post', title: 'A newer post', date: '2026-03-02', summary: 'Written second.' },
      { slug: 'older-post', title: 'An older post', date: '2026-01-15', summary: 'Written first.' }
    ]);
  });

  test('lists undated posts after the dated ones, by title', () => {
    // The list is built from fs output in another realm, so copy it before a strict compare.
    expect(Array.from(getPosts('optional', fixtureRoot))).toStrictEqual([
      { slug: 'dated', title: 'Dated', date: '2026-01-01' },
      { slug: 'zebra', title: 'Aardvark' },
      { slug: 'title-only', title: 'Only a title' }
    ]);
  });

  test('returns no posts for a section folder with no markdown files', () => {
    expect(getPosts('personal', fixtureRoot)).toEqual([]);
  });

  test('returns no posts for a section folder that does not exist', () => {
    expect(getPosts('missing', fixtureRoot)).toEqual([]);
  });
});

describe('getPost', () => {
  test('returns a single post with its markdown body', () => {
    expect(getPost('ramblings', 'newer-post', fixtureRoot)).toEqual({
      slug: 'newer-post',
      title: 'A newer post',
      date: '2026-03-02',
      summary: 'Written second.',
      content: '\nNewer **body**.\n'
    });
  });

  test('leaves out the date and summary when a post has none', () => {
    expect(getPost('optional', 'title-only', fixtureRoot)).toStrictEqual({
      slug: 'title-only',
      title: 'Only a title',
      content: '\nUntitled body.\n'
    });
  });

  test('keeps a quoted date exactly as written', () => {
    expect(getPost('systems', 'only-post', fixtureRoot).date).toBe('2026-02-10');
  });
});

describe('getVisibleSections', () => {
  test('returns only the sections that have posts, in navigation order', () => {
    const slugs = getVisibleSections(fixtureRoot).map((section) => section.slug);
    expect(slugs).toEqual(['ramblings', 'systems']);
  });

  test('each visible section carries its name, description and header image', () => {
    const [ramblings] = getVisibleSections(fixtureRoot);
    expect(ramblings.name).toBe('Ramblings');
    expect(ramblings.description).not.toBe('');
    expect(ramblings.image).toBe('/images/section-ramblings.svg');
  });
});
