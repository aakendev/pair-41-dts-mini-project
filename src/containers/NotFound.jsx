import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const NotFound = () => {
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
                <h1 className="mt-4 mb-4 text-center">
                  Oops... It seems your destination is not found, kindly please
                  go back to{" "}
                  <Link className="hover:text-blue-600" to="/">
                    Homepage
                  </Link>
                  .
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
