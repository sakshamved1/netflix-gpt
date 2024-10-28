import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";

import { addUser } from "./userSlice";


const Login = () => {
  const [isSigninForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  // const fullName = useRef(null);

  const handleButtonClick = () => {
    //Validate the form data

    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );

    console.log("Name:", name.current.value);

    console.log(message);
    setErrorMessage(message);

    if (!isSigninForm) {
      //Signup Part
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/47498296?v=4&size=64",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              // Profile updated!
              navigate("/Browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // ...
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Signin Part
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const togglesignupform = () => {
    setIsSignInForm(!isSigninForm);
  };

  return (
    <div class>
      <Header />
      <div className="absolute">
        <img
          className="relative h-screen bg-cover bg-center bg-no-repeat"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
          alt="Logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white absolute p-14 w-4/12  bg-black my-36 mx-auto right-0 left-0 bg-opacity-80"
      >
        <h1 className="font-bold text-3xl m-2">
          {isSigninForm ? "Sign in" : "Sign up"}
        </h1>
        {!isSigninForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Adress"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-500 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSigninForm ? "Sign in" : "Sign up"}
        </button>
        <p className="p-2 my-4 cursor-pointer" onClick={togglesignupform}>
          {isSigninForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Log-in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
