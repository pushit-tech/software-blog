import { Locales, convertLocaleToISO, LANGUAGES } from "@/locales/model";
import { allPosts } from "contentlayer/generated";
import { mapPosts, sortPostByDate } from "@/context/blog/utils/post";

const postsData = getAllPostsFromCurrentLanguage();

export function getAllPosts() {
  return mapPosts(allPosts);
}

export function getAllPostsFromCurrentLanguage(language = LANGUAGES.ENGLISH) {
  const lang = convertLocaleToISO(language);
  const filteredPosts = allPosts.filter((post) => {
    const path = post._raw.flattenedPath;
    return path.includes(`${lang}`);
  });
  return mapPosts(filteredPosts);
}

export function findPostBySlugAndLanguage(slug: string, language: string) {
  return postsData.find(
    (post) => post.slug === slug && post.language === language
  );
}

export function getSortedPost() {
  return sortPostByDate(postsData);
}
