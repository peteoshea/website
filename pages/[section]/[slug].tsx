import type { GetStaticPaths, GetStaticProps } from 'next';
import Layout from 'components/common/layout';
import Markdown from 'components/common/markdown';
import formatPostDate from 'content/posts/formatPostDate';
import { getPost, getPosts, getVisibleSections } from 'content/posts/posts';
import { Post } from 'types/post';
import { Section } from 'types/section';

type Props = {
  section: Section;
  post: Post;
  sections: Section[];
};

export const PostPage = ({ section, post, sections }: Props): React.JSX.Element => (
  <Layout pageTitle={post.title} currentSection={section.name} sections={sections}>
    {post.date && <p className="text-center text-sm text-gray-500">{formatPostDate(post.date)}</p>}
    <article className="mt-6">
      <Markdown content={post.content} />
    </article>
    <a
      href={`/${section.slug}`}
      className="mt-8 inline-block font-medium text-gray-500 hover:text-gray-900"
    >
      ← Back to {section.name}
    </a>
  </Layout>
);

type Params = { section: string; slug: string };

export const getStaticPaths: GetStaticPaths<Params> = async () => ({
  paths: getVisibleSections().flatMap((section) =>
    getPosts(section.slug).map((post) => ({
      params: { section: section.slug, slug: post.slug }
    }))
  ),
  fallback: false
});

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const sections = getVisibleSections();
  const section = sections.find(({ slug }) => slug === params.section);
  return { props: { section, post: getPost(section.slug, params.slug), sections } };
};

export default PostPage;
