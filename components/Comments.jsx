import moment from "moment";
import { comment, Result } from "postcss";
import React, { useState } from "react";
import { getComments } from "../services";
import parse from "html-react-parser";
import { useEffect } from "react";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  });

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8 ">
          <h3 className="text-xl mb-8 font-semibold">
            {comments.length} Comments
          </h3>

          {comments.map((c) => {
            console.log(c);
            return (
              <div
                key={c.createdAt}
                className="border-b border-gray-100 mb-4 pb-4 "
              >
                <p className="mb-4 ">
                  <span className="font-semibold">{c.name}</span> on{" "}
                  {moment(c.createdAt).format("MMM, DD, YYYY")}
                </p>
                <p className="whitespace-pre-line w-full ">
                  {parse(c.comment)}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Comments;
