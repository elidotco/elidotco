import Head from "next/head";
import postcss from "postcss";
import React from "react";
import {
  Author,
  Category,
  Comments,
  CommentsForm,
  PostDetail,
  PostWidget,
} from "../../components";
import { AdjacentPosts } from "../../sections";
import { getPostDetails, getPosts, getPostsDetails } from "../../services";

const PostDetails = ({ post }) => {
  return (
    <>
      <Head>
        <title>{`Elitoco/posts/${post.slug}`}</title>
      </Head>

      <div
        className="container mx-auto px-4 lg:px-10
mb-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div
              className="relative lg:sticky top-8
      "
            >
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((c) => c.slug)}
              />
              <Category />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
