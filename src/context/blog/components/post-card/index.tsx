import { Post } from "contentlayer/generated";
import Link from "next/link";
import React from "react";
import { PitTag } from "@/components/tag";
import { PitAvatar } from "@/components/avatar";
import "./styles.scss";

export default function PostCard(post: Post) {
  return (
    <article className="post-card">
      <div>
        <dl className="post-card__metadata">
          <dd>
            <PitAvatar image="./avatar/me_50.webp" size="xs"></PitAvatar>
          </dd>
          <dt data-hidden>Written by</dt>
          <dd>Juan Carlos Vargas</dd>
          <dt data-hidden>Published on</dt>
          <dd>
            <time dateTime={post.date}>{post.date}</time>
          </dd>
        </dl>
      </div>
      <main className="post-card__body">
        <Link href={post.url} className="post-card__content">
          <h2 className="post-card__title">{post.title} </h2>
          <p className="post-card__description">{post.description}</p>
        </Link>
        <div className="post-card__image"></div>
      </main>
      <footer className="post-card__footer">
        <PitTag>microfrontends</PitTag>
        <span>11 min readed</span>
      </footer>
    </article>
  );
}
