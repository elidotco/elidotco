import React, { useState, useEffect } from "react";
import moment from "moment";
import { getrecentPosts, getSimilarPosts } from "../services";
import Image from "next/image";
import { useLayoutEffect } from "react";
import Link from "next/link";

const PostWidget = ({ slug, categories }) => {
  const [relatedPosts, setRelatedPost] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPost(result)
      );
    } else {
      getrecentPosts().then((result) => {
        setRelatedPost(result);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 ">
      <h3 className="text-xl mb-8 font-semibold pb-4 border-b">
        {slug ? "Related Post" : "Recent posts"}
      </h3>
      {relatedPosts.map((post) => {
        return (
          <div
            key={post.title}
            className="flex items-center mb-4 w-full border-b"
          >
            <div className="w-16 flex-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={post.title}
                src={post.featuredImage.url}
                className="align-middle h-16 w-16 object-cover rounded-full"
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="font-xs text-gray-500">
                {moment(post.createdAt).format("MMM, DD ,YY")}
              </p>
              <Link href={`/post/${post.slug}`} key={post.title}>
                {post.title}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostWidget;
