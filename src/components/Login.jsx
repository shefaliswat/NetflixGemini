import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Header } from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../firebase";
import { BACKGROUND_IMAGE } from "../utils/constants";

export const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
    resetForm();
  };

  const handleButtonClick = () => {
    //validate form data
    const error = checkValidData(
      isSignInForm,
      email.current.value,
      password.current.value,
      !isSignInForm ? name.current.value : ""
    );
    setError(error);
    if (error) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "Shefali S.",
            photoURL: "",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              setError(error.message);
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //test123@gmail.com
          //Test@1234
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage);
        });
    }
  };

  const resetForm = () => {
    //TODO
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="logo"
          src={BACKGROUND_IMAGE}
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-3/12 mx-auto my-36 right-0 left-0 text-white text-center p-10"
      >
        <h1 className="font-bold text-3xl text-left">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter your name"
            className="mt-5 p-3 border-white w-full bg-gray-600"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="my-5 p-3 border-white w-full bg-gray-600"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-5 p-3 w-full bg-gray-600"
          ref={password}
        />
        <p className="text-red-600">{error}</p>
        <button
          className="px-2 py-2 my-4 bg-red-700 w-full cursor-pointer"
          onClick={handleButtonClick}
          type="submit"
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <p className="text-left mt-1" onClick={toggleForm}>
          {isSignInForm ? "New to Netflix" : "Already registered"}?
          <b className="cursor-pointer">
            {isSignInForm ? " Sign up now" : " Sign in now"}.
          </b>
        </p>
      </form>
    </div>
  );
};
