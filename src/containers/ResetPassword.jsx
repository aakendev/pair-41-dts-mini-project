import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Email Send");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-screen object-cover"
          src="https://templates.iqonic.design/streamit/frontend/html/images/login/login.jpg"
          alt="/"
        />
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-auto mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <div className="justify-center">
                <Link to="/">
                  <img
                    src={logo}
                    className="w-full h-20 object-contain"
                    alt="logo"
                  />
                </Link>
                <h1 className="mt-4 mb-4 text-center">Reset your Password</h1>
              </div>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  //   onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-black border focus:border-red-600 focus:ring-red-600 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  name="email"
                />
                <p className="text-xs text-red-400 text-center">
                  {errorMessage}
                </p>
                <button className="bg-red-600 hover:bg-red-900 active:bg-red-900 py-3 my-3 font-bold">
                  Reset Password
                </button>
                <div className="mt-2 text-xs">
                  Already Reset Password?{" "}
                  <Link
                    className="hover:bg-red-600 active:bg-red-600"
                    to="/signin"
                  >
                    Sign In Again
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
