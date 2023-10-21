import { Post } from "contentlayer/generated";
import Link from "next/link";
import React from "react";
import { PitTag } from "@/components/tag";
import "./styles.scss";

export default function PostCard(post: Post) {
  return (
    <article className="post-card">
      <div></div>
      <Link href={post.url} className="post-card__link">
        <dl className="post-card__date">
          <dt data-hidden>Published on</dt>
          <dd>
            <time dateTime={post.date}>{post.date}</time>
          </dd>
        </dl>
        <h1 className="post-card__title">{post.title} </h1>
        <p>{post.description}</p>
      </Link>
      <footer>
        <PitTag>microfrontends</PitTag>
      </footer>
    </article>
  );
}
