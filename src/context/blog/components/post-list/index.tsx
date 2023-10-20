"use client";

import type { Post } from "@/context/blog/api/post";
import PostCard from "@/context/blog/components/post-card";

interface Params {
  posts: Post[];
}

export default function PostCardList({ posts }: Params) {
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post._id} {...post} />
      ))}
    </div>
  );
}
