import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const Card = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 mb-8 p-0">
      {/* Post image */}

      <div className="relative overflow-hidden shadow-md pb-80 mb-6 ">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-cover absolute w-full h-full rounded-t-lg lg:rounded-lg "
        />
      </div>
      <h1
        className="transition 
      duration-700 text-center mb-8 
      cursor-pointer text-3xl 
      font-semibold 
       hover:text-pink-700"
      >
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>

      {/* Author info */}
      <div
        className=" lg:flex text-center items-center block justify-center
      flex-col  w-full mb-8"
      >
        <div className="flex justify-center items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 ">
          <Image
            alt={post.author.name}
            height={30}
            width={30}
            className="align-center rounded-full"
            src={post.author.image.url}
          />
          <p
            className="inline align-middle text-gray-700 ml-2 text-lg
          "
          >
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700 flex mt-5  justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              inecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>

          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className="text-center font-normal text-gray-700 text-lg lg:px-8 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span
            className="transition duration-500 transform hover:-translate-y-1 bg-pink-600 inline-block font-medium
          rounded-full text-white px-8 py-3 mb-5
          cursor-pointer"
          >
            continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
