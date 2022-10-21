import React from "react";
import { useEffect } from "react";
import { db } from "../firebase/index";
import { collection, addDoc } from "firebase/firestore";
import { useRef } from "react";
import { useState } from "react";

const Newsletter = () => {
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);
  const emailEl = useRef();
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }

    return false;
  }
  const sub = async () => {
    const { value: email } = emailEl.current;
    if (email && ValidateEmail(email)) {
      setError(false);
      try {
        const docRef = await addDoc(collection(db, "subscribers"), {
          email: email,
        });
        emailEl.current.value = "";
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setSucess(true);
      setTimeout(() => {
        setSucess(false);
      }, 3000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-gray-500 shadow-lg rounded-md flex justify-center  items-center my-4 bg-opacity-20 px-4 py-5 flex-col">
      <div className={error ? "text-red-500" : "text-green-600"}>
        {error ? "please enter a valid E-mail " : ""}
        {sucess ? "Let's have fun " : ""}
      </div>
      <div
        className="form  flex-col md:flex-row flex gap-5
       "
      >
        <input
          type="email"
          ref={emailEl}
          className="px-4 py-2 rounded-md outline-none"
        />
        <button
          onClick={sub}
          className="bg-blue-500 px-2 py-1 rounded-md
        "
        >
          Subscribe
        </button>
      </div>
      <p className="">
        No <span className="text-red-500">Spam</span> ! Ever
      </p>
    </div>
  );
};

export default Newsletter;
