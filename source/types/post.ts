export type PostSummary = {
  slug: string;
  title: string;
  date?: string;
  summary?: string;
  image?: string;
};

export type Post = PostSummary & {
  content: string;
};
