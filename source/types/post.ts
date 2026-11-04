export type PostSummary = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export type Post = PostSummary & {
  content: string;
};
