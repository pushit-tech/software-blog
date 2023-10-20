import { Markdown } from "@contentlayer/core/src/data-types";

export type MyMarkdown = {
  /** Raw Markdown source */
  raw: string;
  /** Generated HTML based on Markdown source */
  html: string;
};

export type MyPost = {
  id: string;
  title: string;
  date: string;
  body: Markdown;
  url: string;
  language: string;
};
