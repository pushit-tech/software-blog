import { Post } from "contentlayer/generated";
import Link from "next/link";
import React from "react";
import "./styles.scss";

export default function PostCard(post: Post) {
  return (
    <article className="post-card">
      <dl className="post-card__date">
        <dt data-hidden>Published on</dt>
        <dd>
          <time dateTime={post.date}>{post.date}</time>
        </dd>
      </dl>
      <h3 className="post-card__title">{post.title} </h3>
      <p>{post.description}</p>
      <Link href={post.url} className="">
        Read More
      </Link>
    </article>
  );
}
