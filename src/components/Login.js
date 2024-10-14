import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSigninForm, setIsSignInForm] = useState();

  const togglesignupform = () => {

    setIsSignInForm(!isSigninForm);


  }



  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
          alt="Logo"
        />
      </div>
      <form className="text-white absolute p-14 w-4/12  bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-3xl m-2">{isSigninForm ? "Sign in" : "Sign up"}</h1>
        {!isSigninForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />}
        <input
          type="text"
          placeholder="Email Adress"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-500 w-full rounded-lg">
        {isSigninForm ? "Sign in" : "Sign up"}
        </button>
        <p className="p-2 my-4 cursor-pointer" onClick={togglesignupform}>{!isSigninForm ? "Already a User? Log-in" : "New to Netflix? Sign Up Now"}</p>
      </form>
    </div>
  );
};

export default Login;
