import { async } from "@firebase/util";
import { addDoc, collection } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { db } from "../firebase";

const Contact = () => {
  const [error, setError] = useState(false);
  const [showSuccesMessage, setShowSuccesMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleMess = async () => {
    console.log("sent");

    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;

    if (!comment || !name || !email) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      try {
        const docRef = await addDoc(collection(db, "messages"), {
          email: email,
          name,
          comment,
        });
        emailEl.current.value = "";
        nameEl.current.value = "";
        commentEl.current.value = "";
        setShowSuccesMessage(true); //

        setTimeout(() => {
          setShowSuccesMessage(false); //
        }, 1500);

        console.log(docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };
  return (
    <div className="container mx-auto px-4 lg:px-10 mb-6">
      <div className="bg-white shadow-lg text-center rounded-lg p-8 pb-12">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          How Can I Help You
        </h3>
        <div className="grid grid-cols-1 mb-4 gap-4">
          <textarea
            ref={commentEl}
            className="p-4 outline-none w-full rounded-lg focus:ring-2 bg-gray-100 focus:ring-gray-200 text-gray-700"
            placeholder="Please keep it short and sweet"
            name="Message"
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
        <div className="grid grid-cols-1 gap-4 mb-4"></div>

        {error && (
          <p className="text-xs text-red-500">All Fields are Required</p>
        )}
        <div className="mt-8">
          <button
            type="button"
            onClick={handleMess}
            className="transition duration-500 ease
          hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full px-8 py-3 cursor-pointer
          "
          >
            send
          </button>
          {showSuccesMessage && (
            <span className="text-xl float-right font-semibold text-green-500">
              Message recieved
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
