import Link from "next/link";
import React from "react";
import { PitTag } from "@pit/ui/components/tag";
import { NxtAvatar } from "@/app/components/avatar";
import "./styles.scss";
import { MyPost } from "../../types";

export default function PostCard(post: MyPost) {
  return (
    <article className="post-card">
      <div>
        <dl className="post-card__metadata">
          <dd>
            <NxtAvatar src="/me_50.webp" alt="" size="xs"></NxtAvatar>
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
        <span>{post.readTime} min read</span>
      </footer>
    </article>
  );
}
