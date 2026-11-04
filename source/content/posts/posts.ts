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
  return {
    slug: path.basename(file, '.md'),
    title: data.title,
    date: toDateString(data.date),
    summary: data.summary,
    content
  };
};

export const getPosts = (section: string, contentRoot = defaultContentRoot): PostSummary[] => {
  const folder = path.join(contentRoot, section);
  if (!fs.existsSync(folder)) {
    return [];
  }
  return fs
    .readdirSync(folder)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const { slug, title, date, summary } = readPost(path.join(folder, file));
      return { slug, title, date, summary };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
};

export const getPost = (section: string, slug: string, contentRoot = defaultContentRoot): Post =>
  readPost(path.join(contentRoot, section, `${slug}.md`));

export const getVisibleSections = (contentRoot = defaultContentRoot): Section[] =>
  sections.filter((section) => getPosts(section.slug, contentRoot).length > 0);
