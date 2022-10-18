import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { submitComment } from "../services";
const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccesMessage, setShowSuccesMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();
  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleCommentSub = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccesMessage(true);
      setTimeout(() => {
        setShowSuccesMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">commentsform</h3>
      <div className="grid grid-cols-1 mb-4 gap-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 bg-gray-100 focus:ring-gray-200 text-gray-700"
          placeholder="Comment"
          name="Comment"
        />
      </div>
      <div className="grid grid-cols-1 mb-4 gap-4 lg:grid-cols-2">
        <input
          type="text"
          ref={nameEl}
          className="py-4 outline-none w-full rounded-lg focus:ring-2 bg-gray-100 focus:ring-gray-200 text-gray-700 px-4"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          ref={emailEl}
          className="py-4 outline-none w-full rounded-lg focus:ring-2 bg-gray-100 focus:ring-gray-200 text-gray-700 px-4"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            name="
         storeData "
            id="storeData"
          />
          <label className="text-gray-500 cursor-pointer ml-2 " htmlFor="">
            save my name and email for the next time i comment
          </label>
        </div>
      </div>

      {error && <p className="text-xs text-red-500">All Fields are Required</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSub}
          className="transition duration-500 ease
          hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full px-8 py-3 cursor-pointer
          "
        >
          post comment
        </button>
        {showSuccesMessage && (
          <span className="text-xl float-right font-semibold text-green-500">
            comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
