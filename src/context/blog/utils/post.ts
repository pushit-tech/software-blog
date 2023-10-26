import { type Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { format, parseISO } from "date-fns";
import { BASE_LANG } from "@/context/blog/utils/constants";
import { MyPost } from "../types";

export const isLanguagePath = (path: string, lang = BASE_LANG) =>
  path.includes(`/${lang}`);

export const sortPostByDate = (posts: MyPost[]) => {
  return posts.sort((a: MyPost, b: MyPost) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
};

export const mapPost = (post: Post): MyPost => ({
  id: post._id,
  slug: post._raw.sourceFileDir,
  title: post.title,
  description: post.description,
  date: format(parseISO(post.date), "LLLL d, yyyy"),
  body: post.body,
  url: post.url,
  readTime: readingTime(post.body.raw),
  language: getCurrentLanguageFromPost(post),
});

function getCurrentLanguageFromPost(post: Post) {
  return post._raw.flattenedPath.split("/")[1];
}

export const mapPosts = (posts: Post[]) => posts.map(mapPost);

export function readingTime(
  text: string,
  wordsPerMinute: number = 250,
  extraTimePerImage: number = 0.5,
  extraTimePerCodeSnippet: number = 2
) {
  const noOfWords = text.split(/\s/g).length;
  const noOfImages = (text.match(/<img /g) || []).length;
  const noOfCodeSnippets = (text.match(/<code>/g) || []).length;

  const minutes =
    noOfWords / wordsPerMinute +
    noOfImages * extraTimePerImage +
    noOfCodeSnippets * extraTimePerCodeSnippet;
  const readTime = Math.ceil(minutes);

  return readTime;
}
