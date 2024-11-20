import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import lang from "../utils/languageConstant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/Login");
      }
    });

    //Unsubscribe when  component unmounts
    return () => unsubscribe(); // Cleanup subscription
  }, []);

  const handleGptSearchClick = () => {
    //Toggle GPT Search button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="absolute flex justify-between w-full px-6 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-40"
        src="https://imgs.search.brave.com/s-xChu4R0YhMVBudxSCtl980q04kOXjbTZqh_6E6sRU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb29k/aWJlZS5jb20vd3At/Y29udGVudC91cGxv/YWRzL05ldGZsaXgt/bG9nby0zMDB4MzAw/LnBuZw"
        alt="Logo"
      />

      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="m-16 p-2 bg-gray-900 text-white"
              onClick={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-800 text-white px-4 py-2 my-16 rounded-lg"
            onClick={handleGptSearchClick}
          >
           {showGptSearch ? "Home page" :  "GPT Search"}
          </button>
          <img
            className="h-8 m-16"
            alt="user-icon"
            // src="https://imgs.search.brave.com/Tso5b-lOgqvrXcfgrknvzs0lqGmW_rXIwHjY3nkCBFI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/c3ZnLm9yZy9pbWcv/YWJzdHJhY3QtdXNl/ci1mbGF0LTQucG5n"
            src={user?.photoURL}
          />

          <button
            className="font-bold cursor-pointer text-white"
            onClick={handleSignOut}
          >
            {"Sign-out"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
