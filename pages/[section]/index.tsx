import type { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Layout from 'components/common/layout';
import formatPostDate from 'content/posts/formatPostDate';
import { getPosts, getVisibleSections } from 'content/posts/posts';
import { PostSummary } from 'types/post';
import { Section } from 'types/section';

type Props = {
  section: Section;
  posts: PostSummary[];
  sections: Section[];
};

export const SectionPage = ({ section, posts, sections }: Props): React.JSX.Element => (
  <Layout pageTitle={section.name} sections={sections}>
    <Image
      className="mt-4 w-full h-auto rounded-lg"
      src={section.image}
      alt={section.name}
      width={1200}
      height={300}
      priority
    />
    <p className="mt-4 text-lg text-center">{section.description}</p>
    <ul className="mt-6 space-y-6">
      {posts.map((post) => (
        <li key={post.slug}>
          <a
            href={`/${section.slug}/${post.slug}`}
            className="text-2xl font-bold text-red-800 hover:underline"
          >
            {post.title}
          </a>
          <p className="text-sm text-gray-500">{formatPostDate(post.date)}</p>
          <p className="mt-1">{post.summary}</p>
        </li>
      ))}
    </ul>
  </Layout>
);

type Params = { section: string };

export const getStaticPaths: GetStaticPaths<Params> = async () => ({
  paths: getVisibleSections().map((section) => ({ params: { section: section.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const sections = getVisibleSections();
  const section = sections.find(({ slug }) => slug === params.section);
  return { props: { section, posts: getPosts(section.slug), sections } };
};

export default SectionPage;
