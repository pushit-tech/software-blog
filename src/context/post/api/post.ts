import { allPosts, Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

export const BASE_LANG = "es";

export function getAllPosts() {
  return mapPosts(allPosts);
}

export function getCurrentLanguagePost() {
  const filteredPosts = allPosts.filter((post) =>
    isLanguagePath(post._raw.flattenedPath)
  );
  return mapPosts(filteredPosts);
}

const isLanguagePath = (path: string, lang = BASE_LANG) =>
  path.includes(`/${lang}`);

const mapPosts = (posts: Post[]) => posts.map(mapPost);

const mapPost = (post: Post) => ({
  ...post,
  date: format(parseISO(post.date), "LLLL d, yyyy"),
});

