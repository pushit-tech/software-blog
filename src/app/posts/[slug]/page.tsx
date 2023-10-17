// app/posts/[slug]/page.tsx
import { allPosts, Post } from 'contentlayer/generated'
import {findPostBySlug } from '@/utils/post';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const post = findPostBySlug(slug);
  if (!post) throw new Error(`Post not found for slug: ${slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: {  slug: string } }) => {
  const { slug } = params
  const post = findPostBySlug(slug);
  if (!post) throw new Error(`Post not found for slug: ${slug}`)

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {post.date}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  )
}

export default PostLayout