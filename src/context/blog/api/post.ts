import { allPosts } from "contentlayer/generated";
import {
  mapPosts,
  sortPostByDate,
  getSlugWithLang,
  isLanguagePath,
} from "@/context/blog/utils/post";

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

export function findPostBySlug(slug: string) {
  const slugWithLang = getSlugWithLang(slug);
  return postsData.find((post) => post._raw.flattenedPath === slugWithLang);
}

export function getSortedPost() {
  return sortPostByDate(postsData);
}
