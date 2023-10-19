import { getCurrentLanguagePost, BASE_LANG } from "@/context/post/api/post";
import { Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const postsData = getCurrentLanguagePost();

export const getSlugWithLang = (slug: string, lang?: string) => {
  const langPath = lang ? `/${lang}` : `/${BASE_LANG}`;
  return `${slug}${langPath}`;
};

export function findPostBySlug(slug: string) {
  const slugWithLang = getSlugWithLang(slug);
  return postsData.find((post) => post._raw.flattenedPath === slugWithLang);
}

export function getSortedPost() {
  return sortPostByDate(postsData);
}


const sortPostByDate = (posts: Post[]) => {
  return posts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
};