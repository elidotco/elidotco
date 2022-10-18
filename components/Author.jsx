import Image from "next/image";
import React from "react";

const Author = ({ author }) => {
  return (
    <div className=" mb-8 mt-20 bg-black relative text-center p-12 bg-opacity-20 rounded-lg ">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          alt={author.name}
          width={100}
          height={100}
          className="align-middle rounded-full"
          src={author.image.url}
        />
      </div>
      <h3 className="text-white font-bold my-4 text-center text-xl">
        {author.name}
      </h3>
      <p className="text-white text-center text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
