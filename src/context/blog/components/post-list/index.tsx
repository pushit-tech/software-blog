"use client";

import type { MyPost } from "@/context/blog/types";
import PostCard from "@/context/blog/components/post-card";

interface Params {
  posts: MyPost[];
}

export default function PostCardList({ posts }: Params) {
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
