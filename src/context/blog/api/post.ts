import { allPosts } from "contentlayer/generated";
import {
  mapPosts,
  sortPostByDate,
  isLanguagePath,
} from "@/context/blog/utils/post";

import { BASE_LANG } from "@/context/blog/utils/constants";

const postsData = getCurrentLanguagePost();

export function getAllPosts() {
  return mapPosts(allPosts);
}

export function getCurrentLanguagePost() {
  const filteredPosts = allPosts.filter((post) =>
    isLanguagePath(post._raw.flattenedPath)
  );
  return mapPosts(filteredPosts);
}

export function findPostBySlugAndLanguage(slug: string, language = BASE_LANG) {
  return postsData.find(
    (post) => post.slug === slug && post.language === language
  );
}

export function getSortedPost() {
  return sortPostByDate(postsData);
}
