import { allPosts, Post } from 'contentlayer/generated'
import { getSortedPost } from '@/context/post/utils/post';
import PostCard from '@/context/post/components/post-card';

export default function Home() {
  const posts = getSortedPost();

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
      {posts.map((post : Post, idx : number) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
