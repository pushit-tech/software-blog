import { getCurrentLanguagePost } from "@/context/blog/api/post";
import PostCardList from "@/context/blog/components/post-list";

export default function Home() {
  const posts = getCurrentLanguagePost();
  return (
    <div>
      <PostCardList posts={posts} />
    </div>
  );
}
