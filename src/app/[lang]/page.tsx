import { Locales } from "@/locales/model";
import { getAllPostsFromCurrentLanguage } from "@/context/blog/api/post";
import PostCardList from "@/context/blog/components/post-list";

type Params = {
  lang: Locales;
};

export default async function Home({ params: { lang } }: { params: Params }) {
  const posts = await getAllPostsFromCurrentLanguage(lang);
  return (
    <div>
      ---{posts.length} --- ---{lang} ---
      <br />
      {/* ---{JSON.stringify(context)} --- */}
      <br />
      {/* xxx{JSON.stringify(posts)}xxx */}
      <PostCardList posts={posts} />
    </div>
  );
}
