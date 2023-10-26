// app/posts/[slug]/page.tsx
import { allPosts } from "contentlayer/generated";
import { findPostBySlugAndLanguage } from "@/context/blog/api/post";
import "./styles.scss";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = findPostBySlugAndLanguage(slug);
  if (!post) throw new Error(`Post not found for slug: ${slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = findPostBySlugAndLanguage(slug);

  if (!post) {
    return <PostNotFound />;
  }

  return (
    <div className="pit-article-container">
      <article className="pit-post-page">
        <div className="">
          <h1 className="pit-post-page__title">{post.title}</h1>
          <h2 className="pit-post-page__subtitle">{post.description}</h2>
          <time dateTime={post.date} className="">
            {post.date}
          </time>
        </div>
        <div
          className="pit-post-page__content"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
    </div>
  );
};

const PostNotFound = () => <div>Post not found</div>;

export default PostLayout;
