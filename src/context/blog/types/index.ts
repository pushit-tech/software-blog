export type MyMarkdown = {
  /** Raw Markdown source */
  raw: string;
  /** Generated HTML based on Markdown source */
  html: string;
};

export type MyPost = {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  body: MyMarkdown;
  url: string;
  readTime: number;
  language: string;
};
