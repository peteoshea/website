import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import sections from 'content/sections';
import { Post, PostSummary } from 'types/post';
import { Section } from 'types/section';

const defaultContentRoot = path.join(process.cwd(), 'source', 'content');

// YAML parses an unquoted YYYY-MM-DD as a Date, so normalise it back to the written form.
const toDateString = (date: unknown): string =>
  date instanceof Date ? date.toISOString().slice(0, 10) : String(date);

const readPost = (file: string): Post => {
  const { data, content } = matter(fs.readFileSync(file, 'utf8'));
  return { ...toSummary(file, data), content };
};

// Missing details are left out, not set to undefined, which Next.js cannot serialise.
const toSummary = (file: string, data: Record<string, unknown>): PostSummary => ({
  slug: path.basename(file, '.md'),
  title: String(data.title),
  ...(data.date !== undefined && { date: toDateString(data.date) }),
  ...(data.summary !== undefined && { summary: String(data.summary) }),
  ...(data.image !== undefined && { image: String(data.image) })
});

const readSummary = (file: string): PostSummary =>
  toSummary(file, matter(fs.readFileSync(file, 'utf8')).data);

// Undated Posts sort as the oldest, so they follow the dated ones.
const newestFirstThenByTitle = (a: PostSummary, b: PostSummary): number =>
  (b.date ?? '').localeCompare(a.date ?? '') || a.title.localeCompare(b.title);

export const getPosts = (section: string, contentRoot = defaultContentRoot): PostSummary[] => {
  const folder = path.join(contentRoot, section);
  if (!fs.existsSync(folder)) {
    return [];
  }
  return fs
    .readdirSync(folder)
    .filter((file) => file.endsWith('.md'))
    .map((file) => readSummary(path.join(folder, file)))
    .sort(newestFirstThenByTitle);
};

export const getPost = (section: string, slug: string, contentRoot = defaultContentRoot): Post =>
  readPost(path.join(contentRoot, section, `${slug}.md`));

export const getVisibleSections = (contentRoot = defaultContentRoot): Section[] =>
  sections.filter((section) => getPosts(section.slug, contentRoot).length > 0);
